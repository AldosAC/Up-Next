# Up Next

Up Next is live!  Check it out here: [upnext.joelcarpenter.net](http://upnext.joelcarpenter.net)

## ! Please note this readme is being actively updated. !

Up Next is your solution to that eternal question... who's up next?  Create a list of participants and Up Next will randomly draw a name from the list, dynamically updating the list to track who's gone and who hasn't.

Up Next was built as a utility during my time at Hack Reactor.  One day, during a series of student presentations, it occurred to me that there had to be a better way to randomly draw a name than just trying to use Siri to generate a random number.  The more I thought about it, the more I realized this was a utility I could build for my co-workers and I to use that would make our lives just a little bit easier.  Thus Up Next was born!

## Initial design goals
- I want to be able to host this as a utility for Hack Reactor, at no cost to them.  So low operating costs is key!
- It needs to be easy and intuitive to use, and should allow the user to quickly add or generate the list of groups.
- It should be possible to make all the modifications to groups in the list that you might expect you should.
  - Rename the group
  - Toggle whether or not the group has gone yet
  - Delete the group
- I want to dive deeper into serverless architecture.
- Data should persist
- It should be light weight and approachable for users.

With these initial design goals in mind, I set about designing the framework that the app would be built off of.

## System Design
While coming up with my design goals, there were a few that stood out as really critical to the system design process.  The app should allow for data persistance, it should be approachable, it should have a serverless back end, and I really need to keep operating costs low.  With those goals in mind, I was able to make a couple of easy design decision:
- No authentication.  It's simple app and there's no reason for people to have to create an account.  It also increases my storage costs.
- Data should be persistant, but it doesn't need to persist forever!  48 hour lifespan on data.
- 

Tech stack:
- React
- AWS Amplify
- AWS API Gateway
- AWS Lambda
- AWS DynamoDB
- Jest / Enzyme

Stretch Goals:
- React Native
