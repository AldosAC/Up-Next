import React, { useState } from "react";
import AddGroups from "./AddGroups.jsx";
import GenerateGroups from "./GenerateGroups.jsx";
import GroupsList from "./GroupsList.jsx";


const Groups = (props) => {
  const { 
    groups,
    addGroup,
    deleteGroup,
    clearGroups,
  } = props;

  return (
    <div className="groups-container" >
      <div className="groups-controls-container">
        <button className="btn-clear-groups" onClick={clearGroups} >Clear Groups</button>
        <div className="add-generate-container">
          <AddGroups addGroup={addGroup} />
          <GenerateGroups
            addGroup={addGroup}
            groups={groups}
          />
        </div>
      </div>
      <GroupsList groups={groups} deleteGroup={deleteGroup} />
    </div>
  )
}

export default Groups;