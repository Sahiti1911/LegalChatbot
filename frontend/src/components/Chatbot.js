import React, { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import axios from "axios";

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState([]);

  const handleAsk = async () => {
    if (question.trim() === "") return;
    try {
      const res = await axios.post("http://localhost:5000/api/chatbot/ask", { question });
      setHistory([...history, { id: Date.now(), query: question, response: res.data.response }]);
      setQuestion("");
    } catch (error) {
      setHistory([...history, { id: Date.now(), query: question, response: "Error fetching response. Please try again." }]);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-lg shadow-lg text-white p-6">
        
        {/* Header */}
        <h2 className="text-2xl font-semibold flex items-center justify-center mb-4">
          <FaRobot className="mr-2 text-blue-400" /> Legal Research Assistant
        </h2>

        {/* Input Area */}
        <div className="flex items-center space-x-2 bg-white/20 p-3 rounded-lg">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a legal question..."
            className="flex-1 p-2 bg-transparent outline-none text-white placeholder-gray-300"
          />
          <button
            onClick={handleAsk}
            className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center"
          >
            Ask <FaPaperPlane className="ml-2" />
          </button>
        </div>

        {/* Chat History */}
        <div className="mt-4 max-h-80 overflow-y-auto space-y-3 p-2">
          {history.map((entry) => (
            <div key={entry.id} className="p-3 bg-white/20 rounded-lg shadow">
              <p className="text-sm"><strong className="text-blue-400">Question:</strong> {entry.query}</p>
              <p className="text-sm"><strong className="text-green-400">Response:</strong> {entry.response}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
