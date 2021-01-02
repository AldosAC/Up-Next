import React from "react";

const GroupsListItem = (props) => {
  const { group, deleteGroup, index } = props;

  const deleteHandler = () => deleteGroup(index);

  return (
    <li className="groups-list-item" >
      <button className="btn-delete-item" onClick={deleteHandler} >X</button>
      {group.name}
    </li>
  )
}

export default GroupsListItem