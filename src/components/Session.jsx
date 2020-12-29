import React, { useState } from "react";
import sha256 from "sha256";

const Session = (props) => {
  const { setSession } = props;

  const [inputValue, setInputValue] = useState("");
  const [hasSession, setHasSession] = useState(false);

  const generateSession = () => {
    return sha256(Math.random().toString()).slice(0, 4).toUpperCase();
  }

  const onChangeHandler = ({ target }) => {
    setInputValue(target.value);
  }

  const submitSessionHandler = () => setSession(inputValue.slice(0,4));

  const existingSessionHandler = () => setHasSession(true);

  const newSessionHandler = () => setSession(generateSession());

  if (hasSession) {
    return (
      <form className="session">
        <span>Enter your 4 digit session ID.</span>
        <input 
          className="session-input" 
          value={inputValue} 
          onChange={onChangeHandler}
        >
        </input>
        <button onClick={submitSessionHandler} >Continue</button>
      </form> 
    )
  } else {
    return (
      <div>
        <button className="existing-session-btn" onClick={existingSessionHandler}>
          Click here if you have a session id
        </button>
        <button className="new-session-btn" onClick={newSessionHandler}>
          Click here to continue with a random session id
        </button>
      </div>
    );
  }

}

export default Session;