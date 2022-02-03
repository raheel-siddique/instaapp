import React, { useState } from "react";

const AuthFirebase = ({
  socket,
  handleroom,
  handlename,
  username,
  room,
  joinRoom,
}) => {
  // console.log("form data", username + userId);

  return (
    <>
      <div>
        <form action="">
          <input
            type="text"
            placeholder="type your name"
            onChange={handlename}
          />
          <br />
          <br />

          <input
            type="text"
            placeholder="type your Room Id"
            onChange={handleroom}
          />

          <br />
          <br />
          <button variant="warning" onClick={joinRoom}>
            Join Room
          </button>
        </form>
      </div>
    </>
  );
};
export default AuthFirebase;
