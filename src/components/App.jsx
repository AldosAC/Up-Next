import React, { useState } from "react";
import Sessions from "./Sessions.jsx";
import Main from "./Main.jsx";

const App = (props) => {
  const [ session, setSession ] = useState(null);
  
  if (!session) {
    return (
      <div className="main-container">
        <div className="landing-page">
          <span className="text-welcome">Welcome!</span>
          <div className="landing-spacer"></div>
          <Sessions setSession={setSession} />
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