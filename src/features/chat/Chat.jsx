import React from "react";
import { useState } from "react";

const Chat = ({ username, room, socket }) => {
  //   useEffect(() => {
  //     socket.on("receive_message", (data) => {
  //       console.log(data);
  //     });
  //   }, [socket]);
  const [currMsg, setCurrMsg] = useState("");

  const sendMessage = async () => {
    if (currMsg) {
      const msgData = {
        room: room,
        author: username,
        msg: currMsg,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", msgData);
    }
  };

  return (
    <>
      {" "}
      <div className="chat-window">
        <div className="chat-header">
          <p>R & F Chat</p>
        </div>
        <div className="chat-body"></div>
        <div className="chat-footer">
          <input
            type="text"
            placeholder="Enter..."
            onChange={(event) => {
              setCurrMsg(event.target.value);
            }}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  );
};
export default Chat;
