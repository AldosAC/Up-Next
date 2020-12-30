import React, { useState } from "react";
import GroupsList from "./GroupsList.jsx";

const Groups = (props) => {
  const { groups, setGroups } = props;

  return (
    <div className="groups-container">
      <GroupsList groups={groups} />
    </div>
  )
}

export default Groups;