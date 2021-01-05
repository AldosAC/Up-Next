import React, { useState, useCallback } from "react";
import sha256 from "sha256";
import axios from "axios";
import Session from "../models/Session.js";
import { apiUrl } from "../config.json";

const Sessions = (props) => {
  const { setSession, setFailed } = props;

  const [inputValue, setInputValue] = useState("");
  const [hasSession, setHasSession] = useState(false);

  const inputRef = useCallback((node) => node ? node.focus() : undefined);

  const generateSession = () => {
    return new Session(sha256(Math.random().toString()).slice(0, 4).toUpperCase());
  }

  const onChangeHandler = ({ target }) => setInputValue(target.value);
  
  const submitSessionHandler = (event) => {
    const id = inputValue.slice(0,4).toUpperCase();
    const url = `${apiUrl}/${id}/`;

    event.preventDefault();

    axios({
      method: "get",
      url
    })
      .then(({ data }) => {
        if (!data) {
          setHasSession(false);
          setFailed(id);
        } else {
          setSession(data);
        }
      })
      .catch((err) => {
        console.log(`Error loading session: ${err}`);
      })
  }

  const existingSessionHandler = () => setHasSession(true);

  const newSessionHandler = () => {
    let newSession = generateSession();
    const url = `${apiUrl}/${newSession.sessionId}/`;

    console.log(`PUT url: ${url}`);

    axios({
      method: "put",
      url,
      data: newSession
    });
    setSession(newSession);
  }
  if (hasSession) {
    return (
      <form className="session has-session">
        <span className="text-enter-session">Enter your 4 digit session ID</span>
        <input 
          ref={inputRef}
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

export default Sessions;