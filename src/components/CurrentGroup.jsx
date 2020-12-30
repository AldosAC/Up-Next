import React from "react";

const CurrentGroup = (props) => {
  let { group } = props;

  return (
    <div className="current-group" >
      {group.name}
    </div>
  )
}

export default CurrentGroup;
