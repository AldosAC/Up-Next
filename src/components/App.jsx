import React, { useState } from "react";
import Session from "./Session.jsx";
import Main from "./Main.jsx";

const App = (props) => {
  const [session, setSession] = useState(null);
  

  if (!session) {
    return (
      <div className="main-container">
        <span>Welcome!</span>
        <Session setSession={setSession} />
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