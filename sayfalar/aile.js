const express = require("express");
const router = express.Router();

// Aile etkinlikleri verilerini içeri aktarın
const aile = [
  { id: 1, ad: "Aile Etkinliği 1", yasSiniri: 6 },
  { id: 2, ad: "Aile Etkinliği 2", yasSiniri: 10 },
];

// Aile için endpointleri işleyin
router.get("/", (req, res) => {
  res.json(aile);
});

router.post("/", (req, res) => {
  const yeniAile = req.body;
  aile.push(yeniAile);
  res.status(201).json(yeniAile);
});

module.exports = router;
