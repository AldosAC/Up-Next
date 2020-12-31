import React, { useState } from "react";

const AddGroups = (props) => {
  const { addGroup } = props;

  const [ groupName, setGroupName ] = useState("");

  const groupNameInputHandler = ({ target: { value } }) => {
    setGroupName(value)
  }

  return (
    <form>
      <span>Enter Group Name:</span>
      <input value={groupName} onChange={groupNameInputHandler}></input>
    </form>
  )
}

export default AddGroups;