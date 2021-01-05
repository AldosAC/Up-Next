import React, { useState } from "react";
import Sessions from "./Sessions.jsx";
import Main from "./Main.jsx";

const App = (props) => {
  const [ session, setSession ] = useState(null);
  const [ failed, setFailed ] = useState(null);

  const failMessage = <spawn className="session-fail-message">{`Unable to find session "${failed}"`}</spawn>
  const checkFailed = () => failed ? failMessage : null;
  
  if (!session) {
    return (
      <div className="main-container">
        <div className="landing-page">
          <span className="text-welcome">Welcome!</span>
          <div className="landing-spacer">
            {checkFailed()}
          </div>
          <Sessions setSession={setSession} setFailed={setFailed} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="main-container">
        <Main session={session} />
      </div>
    )
  }
};

export default App;