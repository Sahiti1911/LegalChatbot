import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assests/logo.png"; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-3 rounded-full shadow-lg" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar Container */}
      <div className={`fixed top-0 left-0 h-full w-56 bg-gray-900 text-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}>
        {/* Logo */}
        <div className="flex justify-center items-center py-6 border-b border-gray-700">
          <img src={logo} alt="Logo" className="w- h-auto" />
        </div>

        {/* Navigation */}
        <ul className="mt-6 space-y-3">
          <SidebarLink to="/" label="Home" />
          <SidebarLink to="/ask-ai" label="Ask AI" />
          <SidebarLink to="/case-law-search" label="Case Law Search" />
          <SidebarLink to="/dashboard" label="Dashboard" />
        </ul>
      </div>
    </>
  );
};

const SidebarLink = ({ to, label }) => (
  <li>
    <Link 
      to={to} 
      className="block px-6 py-3 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition"
    >
      {label}
    </Link>
  </li>
);
SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Sidebar;
