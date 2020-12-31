import React, { useState } from "react";

const AddGroups = (props) => {
  const { addGroup } = props;

  const [ input, setInput ] = useState("");
  const [ modal, setModal ] = useState(false);

  const onClickHandler = () => {
    if (!modal) {
      setModal(true);
    } else if (modal && input === "") {
      setModal(false);
    } else {
      addGroup(input);
      setModal(false);
      setInput("");
    }
  }

  const inputChangeHandler = ({ target: { value }}) => setInput(value);

  if (!modal) {
    return (
      <div className="add-group-container" >
        <button className="btn-add-group" onClick={onClickHandler} >Add Group</button>
      </div>
    )
  } else {
    return (
      <div className="add-group-container" >
        <button className="btn-add-group" onClick={onClickHandler} >Add Group</button>
        <input value={input} onChange={inputChangeHandler} ></input>
      </div>
    )
  } 
}

export default AddGroups;