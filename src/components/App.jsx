import React, { useState } from "react";

const App = (props) => {
  const [session, setSession] = useState(null);

  if (!session) {
    return (
      <div id="app">
        Please enter your session id:
      </div>
    )
  } else {
    return (
      <div id="app">
        React loaded successfully!
      </div>
    )
  }
};

export default App;