import React, { useState, useEffect } from "react";
import { FaRegClock, FaExternalLinkAlt, FaNewspaper } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const [lawUpdates, setLawUpdates] = useState([]);

  useEffect(() => {
    const fetchLawUpdates = async () => {
      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const feedUrl = "https://www.scotusblog.com/feed/";
        const response = await fetch(proxyUrl + feedUrl);

        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");
        const items = Array.from(xml.querySelectorAll("item")).slice(0, 6);

        const updates = items.map((item) => ({
          title: item.querySelector("title")?.textContent,
          link: item.querySelector("link")?.textContent,
          pubDate: new Date(item.querySelector("pubDate")?.textContent).toLocaleString(), // Format date & time
        }));

        setLawUpdates(updates);
      } catch (error) {
        console.error("Error fetching legal updates:", error);
      }
    };

    fetchLawUpdates();
  }, []);

  return (
    <div className="page-container">
      <div className="glass-effect">
        <h2>Welcome to AI-Powered Legal Research Assistant</h2>
        <p>
          This platform helps legal professionals and researchers find case laws,
          ask legal questions, and streamline legal research. The AI chatbot provides
          instant responses based on preloaded legal data, making your legal research
          faster and more efficient.
        </p>

        <h2>
          <FaNewspaper style={{ marginRight: "10px", color: "#ffffff" }} />
          Latest Legal Updates
        </h2>
        <div className="updates-grid">
          {lawUpdates.length > 0 ? (
            lawUpdates.map((update, index) => (
              <div key={index} className="update-card">
                <h4>{update.title}</h4>
                <p className="update-date">
                  <FaRegClock /> {update.pubDate}
                </p>
                <a href={update.link} target="_blank" rel="noopener noreferrer">
                  Read More <FaExternalLinkAlt />
                </a>
              </div>
            ))
          ) : (
            <p>Loading legal updates...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
