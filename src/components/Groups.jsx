import React, { useState } from "react";
import GroupsList from "./GroupsList.jsx";
import AddGroups from "./AddGroups.jsx";

const Groups = (props) => {
  const { groups, addGroup } = props;

  return (
    <div className="groups-container">
      <AddGroups addGroup={addGroup} />
      <GroupsList groups={groups} />
    </div>
  )
}

export default Groups;