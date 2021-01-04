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
      <form className="session has-session">
        <span className="text-enter-session">Enter your 4 digit session ID</span>
        <input 
          className="session-input" 
          value={inputValue} 
          onChange={onChangeHandler}
        >
        </input>
        <button className="btn-submit-session" onClick={submitSessionHandler} >
          Submit
        </button>
      </form>
    )
  } else {
    return (
      <div className="session no-session">
        <span className="text-session-question">Do you have a session ID?</span>
        <button className="btn-existing-session" onClick={existingSessionHandler}>
          Yes
        </button>
        <button className="btn-new-session" onClick={newSessionHandler}>
          No
        </button>
      </div>
    );
  }

}

export default Session;