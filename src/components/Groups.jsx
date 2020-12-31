import React, { useState } from "react";
import GroupsList from "./GroupsList.jsx";
import AddGroups from "./AddGroups.jsx";
import GenerateGroups from "./GenerateGroups.jsx";

const Groups = (props) => {
  const { groups, addGroup } = props;

  return (
    <div className="groups-container">
      <AddGroups addGroup={addGroup} />
      <GenerateGroups addGroup={addGroup} groups={groups} />
      <GroupsList groups={groups} />
    </div>
  )
}

export default Groups;