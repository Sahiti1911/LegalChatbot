const express = require("express");
const cors = require("cors");

const caseLawRoutes = require("./routes/caseLaw"); // Case law routes
const chatbotRoutes = require("./routes/chatbot"); // Chatbot routes

const app = express();
app.use(cors());
app.use(express.json());

// Register routes
app.use("/api/caselaw", caseLawRoutes);
app.use("/api/chatbot", chatbotRoutes);  // Added chatbot route

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
