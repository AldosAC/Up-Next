import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [session, setSession] = useState(null);

  if (!session) {
    return (
      <div>
        Please enter your session id:
      </div>
    )
  } else {
    return (
      <div>
        React loaded successfully!
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));