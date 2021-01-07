import React, { useState } from "react";
import Groups from "./Groups.jsx";
import CurrentGroup from "./CurrentGroup.jsx";
import Group from "../models/Group.js";
import debounce from "lodash.debounce";
import config from "../config.json";
import axios from "axios";
import { getExpire } from "../utils/getExpire.js";

const Main = (props) => {
  const { session } = props;

  const [ groups, setGroups ] = useState(session.groups);
  const [ currentGroup, setCurrentGroup ] = useState(session.currentGroup);
  const [ pendingGroups, setPendingGroups ] = useState(session.pendingGroups);

  const sendUpdate = debounce((session) => {
    const url = `${config.apiUrl}/${session.sessionId}/`;
    session.expire = getExpire();

    axios({
      method: "put",
      url,
      data: session
    })
      .catch((err) => console.log(`Unable to update back-end: ${err}`));
  }, 4000);

  const indexOf = (arr, target) => {
    return arr.reduce((acc, { name }, index) => {
      if (acc !== -1) {
        return acc;
      } else if (name === target.name) {
        return index;
      } else {
        return -1;
      }
    }, -1);
  };

  const isUnique = (name) => {
    return groups.reduce((prev, curr) => {
      if (curr.name === name) {
        return false;
      } else {
        return prev;
      }
    }, true);
  };

  const addGroup = (input) => {
    let toBeAdded;

    if (groups.length < 30 && isUnique(input)) {
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
    }
  };

  const deleteGroup = (index) => {
    const updatedSession = session;
    updatedSession.groups = [...groups];
    updatedSession.pendingGroups = [...pendingGroups];
    updatedSession.currentGroup = currentGroup;
    const [ removedGroup ] = updatedSession.groups.splice(index, 1);
    const pendingIndex = indexOf(updatedSession.pendingGroups, removedGroup);

    if (pendingIndex >= 0) {
      updatedSession.pendingGroups.splice(pendingIndex, 1);
    }
    
    sendUpdate(updatedSession);
    setGroups(updatedSession.groups);
    setPendingGroups(updatedSession.pendingGroups);
  };

  const resetGroups = () => {
    session.groups = groups;

    session.groups.forEach((item) => item.hasGone = false);
    session.currentGroup = null;
    session.pendingGroups = session.groups;

    sendUpdate(session);
    setGroups(session.groups);
    setCurrentGroup(null);
    setPendingGroups(session.pendingGroups);
  }

  const clearGroups = () => {
    const updatedSession = session;
    updatedSession.groups = [];
    updatedSession.currentGroup = null;
    updatedSession.pendingGroups = [];

    sendUpdate(updatedSession);
    setGroups([]);
    setCurrentGroup(null);
    setPendingGroups([]);
  };

  const upNextClickHandler = () => {
    const index = Math.floor(Math.random() * pendingGroups.length);
    const finishedPlaceholder = { name: "That's All Folks!", hasGone: false }

    if(pendingGroups.length > 0) {
      const updatedSession = session;
      updatedSession.groups = groups.slice();
      updatedSession.pendingGroups = pendingGroups.slice();

      updatedSession.currentGroup = updatedSession.pendingGroups.splice(index, 1)[0];
      updatedSession.groups[indexOf(updatedSession.groups, updatedSession.currentGroup)].hasGone = true;

      sendUpdate(updatedSession);
      setPendingGroups(updatedSession.pendingGroups);
      setGroups(updatedSession.groups);
      setCurrentGroup(updatedSession.currentGroup);
    } else {
      setCurrentGroup(finishedPlaceholder);
    }
  };

  const updateGroup = (group, newGroup) => {
    session.groups = [...groups]
    session.pendingGroups = [...pendingGroups];

    let operation;

    if (group.name === newGroup.name && group.hasGone !== newGroup.hasGone) {
      operation = 'toggle';
    } else if (group.name !== newGroup.name && group.hasGone === newGroup.hasGone) {
      operation = 'rename';
    }

    const pendingIndex = indexOf(pendingGroups, group);

    if (operation === 'toggle') {
      session.groups[indexOf(groups, group)] = newGroup;
      if (pendingIndex >= 0) {
        session.pendingGroups.splice(pendingIndex, 1);
      } else {
        session.pendingGroups.push(newGroup);
      }
    } else if (operation === 'rename' && isUnique(newGroup.name)) {
      session.groups[indexOf(groups, group)] = newGroup;
      session.pendingGroups[pendingIndex] = newGroup;
      if (currentGroup !== null && currentGroup.name === group.name) {
        session.currentGroup = newGroup;
        setCurrentGroup(newGroup);
      }
    }

    sendUpdate(session);
    setGroups(session.groups);
    setPendingGroups(session.pendingGroups);
  }

  const checkCurrentGroup = () => (
    currentGroup ? <CurrentGroup group={currentGroup} /> : null
  );

  return (
    <div className="main" >
      <div className="main-session-id">
        <div className="session-id-text">Session ID: {session.sessionId}</div>
        <div className="session-instruction-text">
          Save this!  Up Next will remember this session for 48 hours
        </div>
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
        resetGroups={resetGroups}
        updateGroup={updateGroup}
      />
    </div>
  );
}

export default Main;