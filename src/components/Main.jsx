import React, { useState } from "react";
import Groups from "./Groups.jsx";
import CurrentGroup from "./CurrentGroup.jsx";
import Group from "../models/Group.js";

const sampleGroups = [
  { name: "group 1", hasGone: false },
  { name: "group 2", hasGone: false }
];

const Main = (props) => {
  const { session } = props;

  const [ groups, setGroups ] = useState(sampleGroups);
  const [ currentGroup, setCurrentGroup ] = useState(null);

  let pendingGroups = groups.slice();

  const addGroup = (name) => {
    let newGroup = new Group(name);

    pendingGroups.push(newGroup);
    setGroups([...groups, newGroup]);
  }

  const upNextClickHandler = () => {
    const index = Math.floor(Math.random() * groups.length);
    const finishedPlaceholder = { name: "That's All Folks!", hasGone: false }

    console.log(`Pending Groups: ${pendingGroups}`)

    if(pendingGroups.length > 1) {
      let queuedGroup = pendingGroups.splice(index, 1)

      setCurrentGroup(queuedGroup);
    } else {
      setCurrentGroup(finishedPlaceholder);
    }
  }

  if (currentGroup) {
    return (
      <div className="main">
        <div className="main-session-id">
          Session ID: {session}
        </div>
        <CurrentGroup group={currentGroup} />
        <div className="up-next-container">
          <button className="btn-up-next" onClick={upNextClickHandler} >
            Up Next!
          </button>
        </div>
        <Groups groups={groups} setGroups={setGroups} />
      </div>
    )
  } else {
    return (
      <div className="main">
        <div className="main-session-id">
          Session ID: {session}
        </div>
        <div className="up-next-container">
          <button className="btn-up-next" onClick={upNextClickHandler} >
            Up Next!
          </button>
        </div>
        <Groups groups={groups} setGroups={setGroups} />
      </div>
    )
  }
}

export default Main;