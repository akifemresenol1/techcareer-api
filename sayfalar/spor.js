const express = require("express");
const router = express.Router();

// Spor etkinlikleri verilerini içeri aktarın
const spor = [
  { id: 1, ad: "Spor Etkinliği 1", sporDali: "Basketbol", tarih: "2023-12-05" },
  { id: 2, ad: "Spor Etkinliği 2", sporDali: "Futbol", tarih: "2023-12-12" },
];

// Spor için endpointleri işleyin
router.get("/", (req, res) => {
  res.json(spor);
});

router.post("/", (req, res) => {
  const yeniSpor = req.body;
  spor.push(yeniSpor);
  res.status(201).json(yeniSpor);
});

module.exports = router;
