import React from "react";
import { FaHistory, FaBookmark } from "react-icons/fa";

const Dashboard = () => {
  // Dummy data for search history & bookmarks
  const searchHistory = [
    "Case Law: Brown v. Board of Education",
    "Legal Rights in Employment",
    "Intellectual Property Law Basics",
  ];

  const bookmarks = [
    "Constitutional Rights - 2023",
    "Landmark Supreme Court Cases",
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg shadow-lg rounded-lg p-6 text-white">
        
        {/* Header */}
        <h2 className="text-3xl font-semibold text-center mb-2">Dashboard</h2>
        <p className="text-gray-300 text-center mb-6">View your search history and bookmarked queries.</p>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Search History Card */}
          <div className="bg-white/20 p-5 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold flex items-center mb-3">
              <FaHistory className="mr-2 text-blue-400" /> Search History
            </h3>
            <ul className="space-y-2">
              {searchHistory.length > 0 ? (
                searchHistory.map((item, index) => (
                  <li key={index} className="text-gray-200 bg-white/10 p-2 rounded">
                    {item}
                  </li>
                ))
              ) : (
                <p className="text-gray-400">No search history available.</p>
              )}
            </ul>
          </div>

          {/* Bookmarked Queries Card */}
          <div className="bg-white/20 p-5 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold flex items-center mb-3">
              <FaBookmark className="mr-2 text-yellow-400" /> Bookmarked Queries
            </h3>
            <ul className="space-y-2">
              {bookmarks.length > 0 ? (
                bookmarks.map((item, index) => (
                  <li key={index} className="text-gray-200 bg-white/10 p-2 rounded">
                    {item}
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
