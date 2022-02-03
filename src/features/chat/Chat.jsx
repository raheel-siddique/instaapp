import React, { useState } from "react";

const Chat = ({ socket, username, room }) => {
  const [currMessage, setCurrMessage] = useState("");

  const sendMessage = async () => {
    if (currMessage) {
      const messageData = {
        room: room,
        author: username,
        message: currMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send message", messageData);
    }
  };
  return (
    <>
      <div className="mainchat">
        <div className="chat-head">
          <h1>LiveChat</h1>
        </div>
        <div className="chat-body"></div>
        <div className="chat-foot">
          <input
            type="text"
            placeholder="enter"
            onChange={(event) => {
              setCurrMessage(event.target.value);
            }}
          />
          <button onClick={sendMessage}>send</button>
        </div>
      </div>
    </>
  );
};
export default Chat;
