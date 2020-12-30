import React from "react";
import GroupsListItem from "./GroupsListItem.jsx"

const GroupsList = (props) => {
  const { groups } = props;

  return (
    <ul className="groups-list">
      {groups.map((group) => <GroupsListItem group={group} key={`gli-${group.name}`} /> )}
    </ul>
  )
}

export default GroupsList;