import React, { useState } from "react";

const GenerateGroups = (props) => {
  const { groups, addGroup } = props;

  const [ input, setInput ] = useState(0);
  const [ modal, setModal ] = useState(false);

  const getHighestCount = () => {
    let highestCount = 0;
    let groupNames = groups.map((group) => {
      return group.name.split(' ');
    });

    groupNames.map(([ firstWord, secondWord ]) => {
      if (
        firstWord.toLowerCase() === "group" 
        && Number(secondWord) > highestCount
      ) {
        highestCount = Number(secondWord);
      }
    });

    return highestCount + 1;
  };

  const onClickHandler = () => {
    if (!modal) {
      setModal(true);
    } else if (modal && input === 0) {
      setModal(false);
    } else {
      let count = getHighestCount();
      let groups = new Array(Number(input)).fill('');
      groups = groups.map(() => {
        let str = `Group ${count}`
        count++
        return str;
      });

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