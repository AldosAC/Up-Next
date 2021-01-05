/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require('express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');

AWS.config.update({
  region: "us-west-2"
});

const ddb = new AWS.DynamoDB.DocumentClient();
const table = "UpNext";

const app = express();
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/session/:id", (req, res) => {
  const { id } = req.params;

  const query = {
    TableName: table,
    Key: {
      sessionId: id
    }
  }

  ddb.get(query).promise()
    .then(({ Item }) => {
      res.status(200).send(Item);
    })
    .catch((err) => {
      console.log(`Error getting data for id ${id}: ${err}`);
      res.sendStatus(500);
    });
});

app.put("/session/:id", bodyParser.json(), (req, res) => {
  const { id } = req.params;
  const session = req.body;

  const doc = {
    TableName: table,
    Item: session
  }

  ddb.put(doc, (err, results) => {
    if (err) {
      console.log(`Unable to update database: ${err}`);
      res.sendStatus(500);
    } else {
      console.log(`Successfully updated database.`)
      res.sendStatus(201);
    }
  })

});

app.listen(3000, function() {
    console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app