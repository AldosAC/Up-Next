import React from "react";

const CurrentGroup = (props) => {
  const { group } = props;

  return (
    <div className="current-group" >
      {group.name}
    </div>
  )
}

export default CurrentGroup;
