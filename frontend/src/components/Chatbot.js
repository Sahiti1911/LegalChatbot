import React, { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState([]); // Stores chat history

  const handleAsk = async () => {
    if (question.trim() === "") return;
    try {
      const res = await axios.post("http://localhost:5000/api/chatbot/ask", { question });

      // Update chat history with new Q&A
      setHistory([...history, { query: question, response: res.data.response }]);
      setQuestion(""); // Clear input field
    } catch (error) {
      setHistory([...history, { query: question, response: "Error fetching response. Please try again." }]);
    }
  };

  return (
    <div className="page-container">
      <div className="glass-effect">
        <h2>
          <FaRobot style={{ marginRight: "10px", color: "#ffffff" }} /> Legal Research Assistant
        </h2>
        
        {/* Input Area */}
        <div className="input-container">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a legal question..."
          />
          <button onClick={handleAsk}>
            Ask <FaPaperPlane style={{ marginLeft: "5px" }} />
          </button>
        </div>

        {/* Chat History */}
        <div className="chat-history">
          {history.map((entry, index) => (
            <div key={index} className="chat-entry">
              <p><strong>Question:</strong> {entry.query}</p>
              <p><strong>Response:</strong> {entry.response}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
