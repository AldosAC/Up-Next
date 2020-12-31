import React, { useState } from "react";

const GenerateGroups = (props) => {
  const { addGroup } = props;

  const [ input, setInput ] = useState(0);
  const [ modal, setModal ] = useState(false);

  const onClickHandler = () => {
    if (!modal) {
      setModal(true);
    } else if (modal && input === "") {
      setModal(false);
    } else {
      let groups = new Array(Number(input)).fill('');
      console.log(`Groups pre-map: ${JSON.stringify(groups)}, length: ${groups.length}`)
      groups = groups.map((val, index) => `Group ${index + 1}`);

      console.log(`Adding groups: ${JSON.stringify(groups)}`);

      addGroup(groups);
      setModal(false);
      setInput(0);
    }
  }

  const inputChangeHandler = ({ target: { value }}) => setInput(value);

  const checkModal = () => (
    modal ?
    <input type="number" value={input} onChange={inputChangeHandler} ></input> 
    : null
  )

  return (
    <div className="generate-groups-container" >
      <button className="btn-generate-groups" onClick={onClickHandler} >Generate Groups</button>
      {checkModal()}
    </div>
  )
}

export default GenerateGroups;