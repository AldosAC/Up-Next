import React from "react";
import GroupsListItem from "./GroupsListItem.jsx"

const GroupsList = (props) => {
  const { groups, deleteGroup } = props;

  return (
    <ul className="groups-list">
      {groups.map((group, index) => (
        <GroupsListItem 
          group={group}
          key={`gli-${group.name}`}
          deleteGroup={deleteGroup}
          index={index}
        />
      ))}
    </ul>
  )
}

export default GroupsList;