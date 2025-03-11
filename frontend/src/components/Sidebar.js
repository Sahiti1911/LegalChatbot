import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assests/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="Legal Assistant Logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ask-ai">Ask AI</Link></li>
        <li><Link to="/case-law-search">Case Law Search</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
