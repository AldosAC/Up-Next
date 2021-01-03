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
    count,
    setCount
  } = props;

  return (
    <div className="groups-container" >
      <button className="btn-clear-groups" onClick={clearGroups} >Clear Groups</button>
      <AddGroups addGroup={addGroup} />
      <GenerateGroups
        addGroup={addGroup}
        groups={groups}
        count={count}
        setCount={setCount}
      />
      <GroupsList groups={groups} deleteGroup={deleteGroup} />
    </div>
  )
}

export default Groups;