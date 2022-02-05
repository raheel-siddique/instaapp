import React, { useState } from "react";

import io from "socket.io-client";
import { NavLink, useHistory } from "react-router-dom";

import Chat from "./features/chat/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import AuthFirebase from "./features/landingpage/auth/AuthFirebase";

const socket = io.connect("heres ip");

const App = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const handlename = (e) => {
    setUsername(e.target.value);
  };
  const handleroom = (e) => {
    setRoom(e.target.value);
  };
  const joinRoom = (e) => {
    e.preventDefault();
    history.push("/chat");

    if (username && room) {
      socket.emit("join_room", room);
    }
    console.log(username, room);
  };
  return (
    <>
      <div>
        <form action="" onSubmit={joinRoom}>
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

          <button variant="warning" type="submit">
            Join Room
          </button>
        </form>
      </div>
      <Router>
        <Switch>
          <Route
            path="/chat"
            exact
            component={() => (
              <Chat socket={socket} username={username} room={room} />
            )}
          />
        </Switch>
      </Router>
    </>
  );
};
export default App;
