import React, { useState } from "react";
import "./Chat.css";

const messagesData = [
  { id: 1, sender: "Alice", text: "Hey, how are you?", time: "10:30 AM", me: false },
  { id: 2, sender: "Me", text: "I’m good! You?", time: "10:32 AM", me: true },
  { id: 3, sender: "Alice", text: "Doing great, thanks!", time: "10:34 AM", me: false },
];

const chatUser = {
  name: "John Doe",
  username: "asmodeusatan",
  avatar: "data:image/jpeg;base64,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",
};

const Chat = () => {
  const [messages, setMessages] = useState(messagesData);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now(), sender: "Me", text: input, time: "Now", me: true },
    ]);
    setInput("");
  };

  return (
    <div className="message-box">
      {/* Header */}
      <div className="chat-header">
        <div className="chat-avatar">
          {chatUser.avatar ? (
            <img src={chatUser.avatar} alt={chatUser.name} />
          ) : (
            chatUser.name.charAt(0) // fallback first letter
          )}
        </div>
        <div className="chat-user-info">
          <p className="chat-name">{chatUser.name}</p>
          <p className="chat-username">{chatUser.username}</p>
        </div>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-message ${msg.me ? "me" : "friend"}`}
          >
            <div className="chat-bubble">
              <p>{msg.text}</p>
              <span className="chat-time">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
