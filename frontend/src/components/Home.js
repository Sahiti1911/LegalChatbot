import React, { useState, useEffect } from "react";
import { FaRegClock, FaExternalLinkAlt, FaNewspaper } from "react-icons/fa";

const Home = () => {
  const [lawUpdates, setLawUpdates] = useState([]);

  useEffect(() => {
    const fetchLawUpdates = async () => {
      try {
        const response = await fetch("https://www.scotusblog.com/feed/");
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");
        const items = Array.from(xml.querySelectorAll("item")).slice(0, 6);

        const updates = items.map((item) => ({
          title: item.querySelector("title")?.textContent,
          link: item.querySelector("link")?.textContent,
          pubDate: new Date(item.querySelector("pubDate")?.textContent).toLocaleString(),
        }));

        setLawUpdates(updates);
      } catch (error) {
        console.error("Error fetching legal updates:", error);
      }
    };

    fetchLawUpdates();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg shadow-lg rounded-lg p-6 text-white">
        
        {/* Header */}
        <h2 className="text-3xl font-semibold text-center mb-2">Welcome to AI-Powered Legal Research Assistant</h2>
        <p className="text-gray-300 text-center mb-6">
          This platform helps legal professionals and researchers find case laws, ask legal questions, and streamline legal research.
          Get instant responses based on preloaded legal data, making your research faster and more efficient.
        </p>

        {/* Latest Legal Updates Section */}
        <h2 className="text-2xl font-semibold flex items-center justify-center mb-4">
          <FaNewspaper className="mr-2 text-blue-400" /> Latest Legal Updates
        </h2>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lawUpdates.length > 0 ? (
            lawUpdates.map((update, index) => (
              <div key={index} className="bg-white/20 p-5 rounded-lg shadow-md hover:shadow-lg transition">
                <h4 className="text-lg font-semibold">{update.title}</h4>
                <p className="text-gray-300 text-sm flex items-center">
                  <FaRegClock className="mr-2 text-yellow-400" /> {update.pubDate}
                </p>
                <a 
                  href={update.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:underline flex items-center mt-2"
                >
                  Read More <FaExternalLinkAlt className="ml-1" />
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">Loading legal updates...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
