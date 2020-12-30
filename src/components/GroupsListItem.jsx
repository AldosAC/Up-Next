import React from "react";

const GroupsListItem = (props) => {
  const { group } = props;

  return (
    <li className="groups-list-item" >
      {group.name}
    </li>
  )
}

export default GroupsListItem