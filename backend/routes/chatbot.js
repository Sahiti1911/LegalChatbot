const express = require("express");
const router = express.Router();

const legalData = {
  "What is contract law?": "Contract law governs agreements between parties, ensuring enforceability in court.",
  "What is criminal law?": "Criminal law defines offenses against society, prosecutable by the government, with punishments including fines and imprisonment.",
  "What is intellectual property?": "Intellectual property refers to creations of the mind, including patents, copyrights, and trademarks.",
  // Add more responses as needed
};

router.post("/ask", (req, res) => {
  console.log("Chatbot request received:", req.body);

  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  const response = legalData[question] || "Sorry, I don't have information on that topic.";
  console.log("Chatbot response:", response);

  res.json({ response });
});

module.exports = router;
