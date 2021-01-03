import React, { useState } from "react";

const GenerateGroups = (props) => {
  const { addGroup, count, setCount } = props;

  const [ input, setInput ] = useState(0);
  const [ modal, setModal ] = useState(false);

  const onClickHandler = () => {
    if (!modal) {
      setModal(true);
    } else if (modal && input === 0) {
      setModal(false);
    } else {
      let newCount = count;
      let groups = new Array(Number(input)).fill('');
      groups = groups.map(() => {
        let str = `Group ${newCount}`
        newCount++
        return str;
      });

      addGroup(groups);
      setModal(false);
      setInput(0);
      setCount(newCount);
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