import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const CaseLawSearch = () => {
  const [query, setQuery] = useState("");
  const [cases, setCases] = useState([]);

  const handleSearch = async () => {
    if (!query) return;

    try {
      const response = await fetch(`http://localhost:5000/api/caselaw/search?query=${query}`);
      const data = await response.json();
      setCases(data);

      // Save query & response in local storage
      const caseHistory = JSON.parse(localStorage.getItem("caseHistory")) || [];
      caseHistory.push({ query, response: data });
      localStorage.setItem("caseHistory", JSON.stringify(caseHistory));
    } catch (error) {
      console.error("Error fetching case laws:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg shadow-lg rounded-lg p-6 text-white">
        
        {/* Header */}
        <h2 className="text-2xl font-semibold flex items-center justify-center mb-4">
          <FaSearch className="mr-2 text-blue-400" /> Case Law Search
        </h2>

        {/* Search Input */}
        <div className="flex items-center bg-white/20 p-3 rounded-lg">
          <input
            type="text"
            placeholder="Search case law..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-white outline-none placeholder-gray-300 p-2"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center"
          >
            <FaSearch className="mr-1" /> Search
          </button>
        </div>

        {/* Case Law Results */}
        <div className="mt-6 max-h-96 overflow-y-auto space-y-4">
          {cases.length > 0 ? (
            cases.map((caseItem, index) => (
              <div key={caseItem.id} className="p-4 bg-white/20 rounded-lg shadow">
                <h3 className="text-lg font-bold text-blue-300">{caseItem.title} ({caseItem.year})</h3>
                <p className="text-sm text-gray-300"><strong>Court:</strong> {caseItem.court}</p>
                <p className="text-sm mt-2 text-gray-200">{caseItem.summary}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-300 mt-4">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseLawSearch;
