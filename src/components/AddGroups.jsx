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

  const inputChangeHandler = ({ key, target: { value }}) => setInput(value);

  const keyPressHandler = ({ key }) => key === "Enter" ? onClickHandler() : undefined;

  if (!modal) {
    return (
      <div className="add-group-container" >
        <button className="btn-add-group" onClick={onClickHandler} >Add Group</button>
      </div>
    )
  } else {
    return (
      <div className="add-group-container" >
        <button className="btn-add-group" onClick={onClickHandler} >
          Add Group
        </button>
        <input 
          className="input-add-group" 
          value={input} 
          onChange={inputChangeHandler} 
          onKeyPress={keyPressHandler}
        >
        </input>
      </div>
    )
  } 
}

export default AddGroups;