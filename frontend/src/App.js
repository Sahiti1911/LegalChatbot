import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Chatbot from "./components/Chatbot";
import CaseLawSearch from "./components/CaseLawSearch";
import Dashboard from "./components/Dashboard";


const App = () => {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ask-ai" element={<Chatbot />} />
          <Route path="/case-law-search" element={<CaseLawSearch />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
