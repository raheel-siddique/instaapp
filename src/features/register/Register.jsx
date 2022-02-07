import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = ({
  handleChangetext,
  handleChangeId,
  joinRoom,
  username,
  room,
}) => {
  return (
    <>
      <div className="App">
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="type your name"
            onChange={handleChangetext}
          />
          <input
            type="text"
            placeholder="type Your id"
            onChange={handleChangeId}
          />
          {username && room ? (
            <NavLink to="/chat">
              <button onClick={joinRoom}>Join Room</button>
            </NavLink>
          ) : (
            <button onClick={joinRoom}>Join Room</button>
          )}
        </div>
        <br />
      </div>
    </>
  );
};
export default Register;
