import React, { useState } from "react";
import GroupsList from "./GroupsList.jsx";

const Groups = (props) => {
  const [groups, setGroups] = useState([{ name: "group 1"}, { name: "group 2" }]);

  return (
    <div className="groups-container">
      <GroupsList groups={groups} />
    </div>
  )
}

export default Groups;