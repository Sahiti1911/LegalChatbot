const express = require("express");
const router = express.Router();

// Dummy case law database (Replace with real database later)
const caseLaws = [
  { id: 1, title: "Doe v. Smith", year: 2021, court: "Supreme Court", summary: "This case dealt with contractual obligations and the enforceability of electronic agreements." },
  { id: 2, title: "State v. Johnson", year: 2019, court: "High Court", summary: "A criminal law case where the defendant was acquitted due to lack of evidence." },
  { id: 3, title: "Tech Corp v. Innovate Ltd.", year: 2020, court: "Court of Appeals", summary: "A landmark intellectual property case regarding patent infringement and fair use." },
  { id: 4, title: "Greenwood v. City Council", year: 2018, court: "District Court", summary: "A civil rights case challenging the city's zoning laws as discriminatory." },
  { id: 5, title: "Williams v. National Bank", year: 2022, court: "Supreme Court", summary: "A banking dispute regarding unauthorized transactions and consumer protections." }
];

// Search endpoint
router.get("/search", (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  // Simple case-insensitive search
  const results = caseLaws.filter(caseLaw =>
    caseLaw.title.toLowerCase().includes(query.toLowerCase()) ||
    caseLaw.summary.toLowerCase().includes(query.toLowerCase())
  );

  res.json(results);
});

module.exports = router;
