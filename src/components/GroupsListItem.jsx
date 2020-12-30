import React from "react";

const GroupsListItem = (props) => {
  const { group } = props;

  return (
    <li>
      {group.name}
    </li>
  )
}

export default GroupsListItem