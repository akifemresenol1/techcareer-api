const express = require("express");
const router = express.Router();

// Bilet verilerini içeri aktarın
const biletler = [
  { id: 1, baslangic: "2023-11-01", bitis: "2023-11-05", resim: "bilet1.jpg" },
  { id: 2, baslangic: "2023-11-10", bitis: "2023-11-15", resim: "bilet2.jpg" },
];

// Biletler için endpointleri işleyin
router.get("/", (req, res) => {
  res.json(biletler);
});

router.post("/", (req, res) => {
  const yeniBilet = req.body;
  biletler.push(yeniBilet);
  res.status(201).json(yeniBilet);
});

module.exports = router;
