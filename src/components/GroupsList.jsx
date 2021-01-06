import React from "react";
import GroupsListItem from "./GroupsListItem.jsx"

const GroupsList = (props) => {
  const { groups, deleteGroup, updateGroup } = props;

  return (
    <div className="groups-list-container">
      <ul className="groups-list">
        {groups.map((group, index) => (
          <GroupsListItem
            key={`gli-${group.name}`}
            group={group}
            updateGroup={updateGroup}
            deleteGroup={deleteGroup}
            index={index}
          />
        ))}
      </ul>
    </div>
  )
}

export default GroupsList;