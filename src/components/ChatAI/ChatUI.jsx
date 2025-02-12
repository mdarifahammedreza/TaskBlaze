"use client";
import { useState, useEffect, useRef } from "react";
import { FaUser, FaRobot, FaMicrophone } from "react-icons/fa";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function ChatUI() {
  const words = "I am an AI assistant Of Taskblaze. I am here to help you with your queries. But I am still under construction. Please be patient with me.";
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatRef = useRef(null);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages([...messages, { sender: "user", text }]);
    setInput("");

    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: <TextGenerateEffect words={words} /> },
      ]);
      setTyping(false);
    }, 2000);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage(input);
    }
  };

  return (
    <div className="flex flex-col  h-screen  border-cyan-400 w-full lg:min-w-[50rem] bg-gray-900 text-white p-6">
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto space-y-4 p-4 border border-gray-700 rounded-lg"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "ai" && <FaRobot className="text-cyan-400" />}
            <div
              className={`px-4 py-2 rounded-lg max-w-xs animate-fade-in ${
                msg.sender === "user"
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              {msg.text}
            </div>
            {msg.sender === "user" && <FaUser className="text-cyan-400" />}
          </div>
        ))}
        {typing && (
          <div className="flex items-center space-x-3 justify-start">
            <FaRobot className="text-cyan-400" />
            <div className="px-4 py-2 rounded-lg max-w-xs bg-gray-800 text-gray-300 animate-pulse">
              Typing...
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 flex space-x-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none"
          placeholder="Type a message..."
        />
        <button
          onClick={() => sendMessage(input)}
          className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
        >
          Send
        </button>
        <button className="px-4 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
          <FaMicrophone />
        </button>
      </div>
    </div>
  );
}

