const express = require("express");
const router = express.Router();

// Tiyatro verilerini içeri aktarın
const tiyatro = [
  { id: 1, ad: "Tiyatro Oyunu 1", tarih: "2023-12-01" },
  { id: 2, ad: "Tiyatro Oyunu 2", tarih: "2023-12-10" },
];

// Tiyatro için endpointleri işleyin
router.get("/", (req, res) => {
  res.json(tiyatro);
});

router.post("/", (req, res) => {
  const yeniTiyatro = req.body;
  tiyatro.push(yeniTiyatro);
  res.status(201).json(yeniTiyatro);
});

module.exports = router;
