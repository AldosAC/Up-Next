import React, { useState } from "react";
import Session from "./Session.jsx";

const App = (props) => {
  const [session, setSession] = useState(null);

  if (!session) {
    return (
      <div className="main-container">
        Please enter your session id:
        <Session setSession={setSession} />
      </div>
    )
  } else {
    return (
      <div className="main-container">
        React loaded successfully!
      </div>
    )
  }
};

export default App;