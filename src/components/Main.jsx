import React, { useState } from "react";
import Groups from "./Groups.jsx";
import CurrentGroup from "./CurrentGroup.jsx";
import Group from "../models/Group.js";

const Main = (props) => {
  const { session } = props;

  const [ groups, setGroups ] = useState([]);
  const [ currentGroup, setCurrentGroup ] = useState(null);
  const [ pendingGroups, setPendingGroups ] = useState(groups);

  const addGroup = (input) => {
    let toBeAdded;

    if (typeof input === "string") {
      toBeAdded = [new Group(input)];
    } else if (typeof input === "object") {
      toBeAdded = input.map((item) => new Group(item));
    }

    setPendingGroups([...pendingGroups, ...toBeAdded]);
    setGroups([...groups, ...toBeAdded]);
  }

  const deleteGroup = (index) => {
    let newGroups = [...groups];
    let newPendingGroups = [...pendingGroups]
    const [ removedGroup ] = newGroups.splice(index, 1);
    const pendingIndex = pendingGroups.indexOf(removedGroup);
    newPendingGroups.splice(pendingIndex, 1);
    
    setGroups(newGroups);
    setPendingGroups(newPendingGroups);
  }

  const upNextClickHandler = () => {
    const index = Math.floor(Math.random() * pendingGroups.length);
    const finishedPlaceholder = { name: "That's All Folks!", hasGone: false }

    if(pendingGroups.length > 0) {
      let newPendingGroups = pendingGroups.slice();
      let newGroups = groups.slice();
      const queuedGroup = newPendingGroups.splice(index, 1)[0];
      newGroups[groups.indexOf(queuedGroup)].hasGone = true;

      setPendingGroups(newPendingGroups);
      setGroups(newGroups);
      setCurrentGroup(queuedGroup);
    } else {
      setCurrentGroup(finishedPlaceholder);
    }
  }

  const checkCurrentGroup = () => (
    currentGroup ? <CurrentGroup group={currentGroup} /> : null
  )

  return (
    <div className="main" >
      <div className="main-session-id">
        Session ID: {session}
      </div>
      {checkCurrentGroup()}
      <div className="up-next-container">
        <button className="btn-up-next" onClick={upNextClickHandler} >
          Up Next!
        </button>
      </div>
      <Groups groups={groups} addGroup={addGroup} deleteGroup={deleteGroup} />
    </div>
  )
}

export default Main;