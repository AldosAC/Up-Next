import React, { useState } from "react";
import Groups from "./Groups.jsx";
import CurrentGroup from "./CurrentGroup.jsx";

const Main = (props) => {
  const { session } = props;

  const [groups, setGroups] = useState([{ name: "group 1"}, { name: "group 2" }]);
  const [ currentGroup, setCurrentGroup] = useState(null);

  const upNextClickHandler = () => {
    const index = Math.floor(Math.random() * groups.length);

    if(groups.length > 1) {
      setCurrentGroup(groups[index]);
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