import React, { useState } from "react";
import Session from "./Session.jsx";

const App = (props) => {
  const [session, setSession] = useState(null);

  if (!session) {
    return (
      <div id="app">
        Please enter your session id:
        <Session setSession={setSession} />
      </div>
    )
  } else {
    console.log(`Session ID: ${session}`);

    return (
      <div id="app">
        React loaded successfully!
      </div>
    )
  }
};

export default App;