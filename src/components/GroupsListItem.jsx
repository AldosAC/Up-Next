import React, { useState, useCallback } from "react";

const GroupsListItem = (props) => {
  const { 
    group,
    deleteGroup,
    updateGroup,
    index,
    group: { hasGone }
  } = props;

  const [input, setInput] = useState('');
  const [inputVisible, setInputVisible] = useState('');

  const inputRef = useCallback((node) => node ? node.focus() : undefined);

  const deleteHandler = () => deleteGroup(index);

  const toggleHandler = () => {
    const newGroup = {...group};
    newGroup.hasGone = hasGone ? false : true;
    updateGroup(group, newGroup);
  };

  const nameClickHandler = () => {
    document.body.addEventListener('click', closeModal, { once: true });
    setInputVisible(true);
  }

  const renameHandler = () => {
    if (input !== '') {
      const newGroup = {...group};
      newGroup.name = input;
      updateGroup(group, newGroup);
      setInput('');
      setInputVisible(false);
    }
  }
  const inputChangeHandler = ({ target: { value }}) => setInput(value.slice(0, 24));

  const inputSubmitHandler = ({ key }) => key === "Enter" ? renameHandler() : undefined;

  const closeModal = () => {
    setInput('');
    setInputVisible(false);
  }

  const itemClasses = hasGone ? "groups-list-item group-has-gone" : "groups-list-item";
  const deleteClasses = hasGone ? "btn-delete-item btn-delete-has-gone" : "btn-delete-item";
  const toggleClasses = hasGone ? "btn-toggle-item btn-toggle-has-gone" : "btn-toggle-item";
  const inputClasses = inputVisible ? "groups-item-input groups-item-input-visible" : "groups-item-input";
  const textClasses = inputVisible ? "group-list-item-text hidden" : "group-list-item-text";

  return (
    <li className={itemClasses} >
      <div className="group-item-btn-container" >
        <button className={toggleClasses} onClick={toggleHandler} ></button>
        <button className={deleteClasses} onClick={deleteHandler} >X</button>
      </div>
      <div className="group-item-text-container">
        <input 
          className={inputClasses}
          onChange={inputChangeHandler}
          value={input}
          onKeyPress={inputSubmitHandler}
          ref={inputRef}
        ></input>
        <div className={textClasses} onClick={nameClickHandler} >{group.name}</div>
      </div>
    </li>
  )
}

export default GroupsListItem