import React, { useState } from "react";
import io from "socket.io-client";
import { useHistory } from "react-router-dom";

import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Chat from "./features/chat/Chat";
import Register from "./features/register/Register";

const socket = io.connect("Api");
const App = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = (e) => {
    console.log(username, room);
    // e.preventdefault();
    if (username && room) {
      history.push("/chat");
      socket.emit("join_room", room);
    }
  };
  const handleChangetext = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeId = (e) => {
    setRoom(e.target.value);
  };
  return (
    <>
      {/* <Register
        socket={socket}
        handleChangetext={handleChangetext}
        handleChangeId={handleChangeId}
        joinRoom={joinRoom}
      /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Register
              socket={socket}
              handleChangetext={handleChangetext}
              handleChangeId={handleChangeId}
              joinRoom={joinRoom}
              username={username}
              room={room}
            />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
