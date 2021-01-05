import React from "react";

const GroupsListItem = (props) => {
  const { group, deleteGroup, index, group: { hasGone } } = props;

  const deleteHandler = () => deleteGroup(index);

  const classes = hasGone ? "groups-list-item group-has-gone" : "groups-list-item";

  return (
    <li className={classes} >
      <button className="btn-delete-item" onClick={deleteHandler} >X</button>
      {group.name}
    </li>
  )
}

export default GroupsListItem