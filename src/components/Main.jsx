import React, { useState } from "react";
import Groups from "./Groups.jsx";
import CurrentGroup from "./CurrentGroup.jsx";
import Group from "../models/Group.js";
import debounce from "lodash.debounce";
import config from "../config.json";
import axios from "axios";

const Main = (props) => {
  const { session } = props;

  const [ groups, setGroups ] = useState(session.groups);
  const [ currentGroup, setCurrentGroup ] = useState(session.currentGroup);
  const [ pendingGroups, setPendingGroups ] = useState(session.pendingGroups);

  const sendUpdate = debounce((session) => {
    const url = `${config.apiUrl}/${session.sessionId}/`;

    axios({
      method: "put",
      url,
      data: session
    })
      .catch((err) => console.log(`Unable to update back-end: ${err}`));
  }, 4000);

  const addGroup = (input) => {
    let toBeAdded;

    if (typeof input === "string") {
      toBeAdded = [new Group(input)];
    } else if (typeof input === "object") {
      toBeAdded = input.map((item) => new Group(item));
    }

    const updatedSession = session;
    updatedSession.groups = [...groups, ...toBeAdded];
    updatedSession.pendingGroups = [...pendingGroups, ...toBeAdded];
    updatedSession.currentGroup = currentGroup;

    sendUpdate(updatedSession);
    setPendingGroups(updatedSession.pendingGroups);
    setGroups(updatedSession.groups);
  };

  const deleteGroup = (index) => {
    const updatedSession = session;
    updatedSession.groups = [...groups];
    updatedSession.pendingGroups = [...pendingGroups];
    updatedSession.currentGroup = currentGroup;
    const [ removedGroup ] = updatedSession.groups.splice(index, 1);
    const pendingIndex = updatedSession.pendingGroups.reduce((acc, { name }, index) => {
      if (acc !== -1) {
        return acc;
      } else if (name === removedGroup.name) {
        return index;
      } else {
        return -1;
      }
    }, -1);

    if (pendingIndex >= 0) {
      updatedSession.pendingGroups.splice(pendingIndex, 1);
    }
    
    sendUpdate(updatedSession);
    setGroups(updatedSession.groups);
    setPendingGroups(updatedSession.pendingGroups);
  };

  const clearGroups = () => {
    setGroups([]);
    setCurrentGroup(null);
    setPendingGroups([]);
  };

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
  };

  const checkCurrentGroup = () => (
    currentGroup ? <CurrentGroup group={currentGroup} /> : null
  );

  return (
    <div className="main" >
      <div className="main-session-id">
        Session ID: {session.sessionId}
      </div>
      <div className="up-next-container">
        {checkCurrentGroup()}
        <button className="btn-up-next" onClick={upNextClickHandler} >
          Up Next!
        </button>
      </div>
      <Groups
        groups={groups}
        addGroup={addGroup}
        deleteGroup={deleteGroup}
        clearGroups={clearGroups}
      />
    </div>
  );
}

export default Main;