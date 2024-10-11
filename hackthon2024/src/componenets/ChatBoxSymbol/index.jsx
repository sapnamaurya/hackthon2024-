import React from "react";
import chatIcon from "../../assets/images/chatbot.png";
import "./style.css";
import { useNavigate } from "react-router-dom";

const ChatBoxSymbol = () => {
  const navigate = useNavigate();
  const handleChatBot = () => {
    navigate("/chat");
  };
  return (
    <div>
      <img
        onClick={handleChatBot}
        className="chaticon"
        src={chatIcon}
        alt="chaticon"
      />
    </div>
  );
};

export default ChatBoxSymbol;
