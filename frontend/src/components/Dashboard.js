import React, { useState, useEffect } from "react";
import { FaHistory, FaBookmark, FaTrash } from "react-icons/fa";

const Dashboard = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  // Load search history & bookmarks from local storage
  useEffect(() => {
    const historyData = JSON.parse(localStorage.getItem("caseHistory")) || [];
    const bookmarkedCases = JSON.parse(localStorage.getItem("bookmarkedCases")) || [];

    setSearchHistory(historyData);
    setBookmarks(bookmarkedCases);
  }, []);

  // Function to remove a bookmark
  const removeBookmark = (id) => {
    const updatedBookmarks = bookmarks.filter((b) => b.id !== id);
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarkedCases", JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg shadow-lg rounded-lg p-6 text-white">
        
        {/* Header */}
        <h2 className="text-3xl font-semibold text-center mb-2">Dashboard</h2>
        <p className="text-gray-300 text-center mb-6">View your search history and bookmarked cases.</p>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Search History Card */}
          <div className="bg-white/20 p-5 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold flex items-center mb-3">
              <FaHistory className="mr-2 text-blue-400" /> Search History
            </h3>
            <ul className="space-y-2 max-h-40 overflow-y-auto">
              {searchHistory.length > 0 ? (
                searchHistory.map((item, index) => (
                  <li key={item.id} className="text-gray-200 bg-white/10 p-2 rounded">
                    {item.query}
                  </li>
                ))
              ) : (
                <p className="text-gray-400">No search history available.</p>
              )}
            </ul>
          </div>

          {/* Bookmarked Cases Card */}
          <div className="bg-white/20 p-5 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold flex items-center mb-3">
              <FaBookmark className="mr-2 text-yellow-400" /> Bookmarked Cases
            </h3>
            <ul className="space-y-2 max-h-40 overflow-y-auto">
              {bookmarks.length > 0 ? (
                bookmarks.map((item) => (
                  <li key={item.id} className="text-gray-200 bg-white/10 p-2 rounded flex justify-between items-center">
                    <span>{item.title} ({item.year})</span>
                    <button
                      onClick={() => removeBookmark(item.id)}
                      className="text-red-400 hover:underline flex items-center"
                    >
                      <FaTrash className="mr-1" /> Remove
                    </button>
                  </li>
                ))
              ) : (
                <p className="text-gray-400">No bookmarks yet.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
