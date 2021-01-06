import React from "react";

const GroupsListItem = (props) => {
  const { 
    group,
    deleteGroup,
    updateGroup,
    index,
    group: { hasGone }
  } = props;

  const deleteHandler = () => deleteGroup(index);

  const toggleHandler = () => {
    group.hasGone = hasGone ? false : true;
    updateGroup(group);
  };
  const updateHandler = () => updateGroup(group);

  const itemClasses = hasGone ? "groups-list-item group-has-gone" : "groups-list-item";
  const deleteClasses = hasGone ? "btn-delete-item btn-delete-has-gone" : "btn-delete-item";
  const toggleClasses = hasGone ? "btn-toggle-item btn-toggle-has-gone" : "btn-toggle-item";

  return (
    <li className={itemClasses} >
      <div className="group-item-btn-container" >
        <button className={toggleClasses} onClick={toggleHandler} ></button>
        <button className={deleteClasses} onClick={deleteHandler} >X</button>
      </div>
      <div className="group-list-item-text">{group.name}</div>
    </li>
  )
}

export default GroupsListItem