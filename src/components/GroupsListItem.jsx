import React from "react";

const GroupsListItem = (props) => {
  const { group, deleteGroup, index, group: { hasGone } } = props;

  const deleteHandler = () => deleteGroup(index);

  const itemClasses = hasGone ? "groups-list-item group-has-gone" : "groups-list-item";
  const buttonClasses = hasGone ? "btn-delete-item btn-group-has-gone" : "btn-delete-item";

  return (
    <li className={itemClasses} >
      <button className={buttonClasses} onClick={deleteHandler} >X</button>
      {group.name}
    </li>
  )
}

export default GroupsListItem