import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./CaseLawSearch.css";

const CaseLawSearch = () => {
  const [query, setQuery] = useState("");
  const [cases, setCases] = useState([]);

  const handleSearch = async () => {
    if (!query) return;

    try {
      const response = await fetch(`http://localhost:5000/api/caselaw/search?query=${query}`);
      const data = await response.json();
      setCases(data);

      // Save query & response
      const caseHistory = JSON.parse(localStorage.getItem("caseHistory")) || [];
      caseHistory.push({ query, response: data });
      localStorage.setItem("caseHistory", JSON.stringify(caseHistory));
    } catch (error) {
      console.error("Error fetching case laws:", error);
    }
  };

  return (
    <div className="glass-effect">
      <h2><FaSearch /> Case Law Search</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search case law..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
      <ul>
        {cases.length > 0 ? (
          cases.map((caseItem, index) => (
            <li key={index}>
              <strong>{caseItem.title} ({caseItem.year})</strong> - {caseItem.court}
              <p>{caseItem.summary}</p>
            </li>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </ul>
    </div>
  );
};

export default CaseLawSearch;
