import React, { useState } from "react";
import Groups from "./Groups.jsx";

const Main = (props) => {
  const { session } = props;

  return (
    <div className="main">
      <div className="main-session-id">
        Session ID: {session}
      </div>
      <div className="up-next-container">
        <button className="btn-up-next" >Up Next!</button>
      </div>
      <Groups />
    </div>
  )
}

export default Main;