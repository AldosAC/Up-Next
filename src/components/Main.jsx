import React, { useState } from "react";

const Main = (props) => {
  const { session } = props;
  const [groups, setGroups] = useState([]);

  return (
    <div className="main">
      <div className="main-session-id">
        Session ID: {session}
      </div>
      <div>
        <button className="btn-up-next" >Up Next!</button>
      </div>
    </div>
  )
}

export default Main;