import React from "react";
import { FaHistory, FaBookmark } from "react-icons/fa"; // Import icons
import "./Dashboard.css";

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
    <div className="page-container">
      <div className="glass-effect">
        <h2> Dashboard</h2>
        <p>View your search history and bookmarked queries.</p>

        {/* Cards Container */}
        <div className="cards-container">
          {/* Search History Card */}
          <div className="card">
            <h3>
              <FaHistory style={{ marginRight: "8px", color: "#ffffff" }} /> Search History
            </h3>
            <ul>
              {searchHistory.length > 0 ? (
                searchHistory.map((item, index) => <li key={index}>{item}</li>)
              ) : (
                <p>No search history available.</p>
              )}
            </ul>
          </div>

          {/* Bookmarked Queries Card */}
          <div className="card">
            <h3>
              <FaBookmark style={{ marginRight: "8px", color: "#ffffff" }} /> Bookmarked Queries
            </h3>
            <ul>
              {bookmarks.length > 0 ? (
                bookmarks.map((item, index) => <li key={index}>{item}</li>)
              ) : (
                <p>No bookmarks yet.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
