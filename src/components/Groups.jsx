import React, { useState } from "react";
import AddGroups from "./AddGroups.jsx";
import GenerateGroups from "./GenerateGroups.jsx";
import GroupsList from "./GroupsList.jsx";


const Groups = (props) => {
  const { groups, addGroup } = props;

  return (
    <div className="groups-container" >
      <AddGroups addGroup={addGroup} />
      <GenerateGroups addGroup={addGroup} groups={groups} />
      <GroupsList groups={groups} />
    </div>
  )
}

export default Groups;