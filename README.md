# Up Next

Up Next is live!  Check it out here: [upnext.joelcarpenter.net](http://upnext.joelcarpenter.net)

Up Next is your solution to that eternal question... who's up next?  Create a list of participants and Up Next will randomly draw a name from the list, dynamically updating the list to track who's gone and who hasn't.

Up Next was built as a utility during my time at Hack Reactor.  One day, during a series of student presentations, it occurred to me that there had to be a better way to randomly draw a name than just trying to use Siri to generate a random number.  The more I thought about it, the more I realized this was a utility I could build for my team to use that would make our lives just a little bit easier.  Thus Up Next was born!

## Features

### Generate groups randomly or add them manually!
In a hurry?  Click the Generate Groups button to quickly generate your groups.  Have a little more time on your hands?  Enter groups by hand.  Rapidly enter group names by using the Enter key to submit, which will leave the input field open and keep focus on it.

![](https://github-resources.s3-us-west-2.amazonaws.com/up-next/un-addgroups-demo.gif)

### Made a mistake?  No worries!  You can modify everything about a group!
Up Next has a variety of controls that allow you to quickly change a list you've generated.
- Clear Groups: Clears the group list
- Reset Groups: Resets who has gone and who hasn't
- Edit Group Name: Click on a group name to modify its name!  When you're done, press Enter to save your changes.
- Toggle Gone/Not Gone: Click the box on the upper-left of a group to toggle whether they've gone or not!
- Delete Group: Click the box on the upper-right of the group to remove that group from the list.

![](https://github-resources.s3-us-west-2.amazonaws.com/up-next/un-modifygroup-demo.gif)

### All set?  Hit Up Next!
Once your groups are created, hitting the Up Next button will randomly select a group and mark them as having gone.  Every time you click Up Next after that will select a new group to go until all groups have gone.

![](https://github-resources.s3-us-west-2.amazonaws.com/up-next/un-upnext-demo.gif)

### Session based data persistence
Up Next utilizes a session id to allow users to access data from a previous visit.  Just write down the randomly generated 4 digit session id, then when you return you can enter the id to pick up right where you left off.  Data is stored for 48 hours after the last time the session was modified, giving users the ability to set groups up ahead of time while also keeping operation costs as low as possible.

![](https://github-resources.s3-us-west-2.amazonaws.com/up-next/un-session-demo.gif)

### Try it yourself!
Up Next is live!  Give it a try [here](https://upnext.joelcarpenter.net)!

## Tech stack
### Front End
- React

### Back End
- AWS Amplify
- AWS API Gateway
- AWS Lambda
- AWS DynamoDB

### Testing
- Jest / Enzyme

## Future Goals
- React Native
- Mobile friendly design
