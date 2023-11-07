const express = require("express");
const router = express.Router();

// Film verilerini içeri aktarın
const filmler = [
  { id: 1, ad: "Film 1", yonetmen: "Yonetmen 1" },
  { id: 2, ad: "Film 2", yonetmen: "Yonetmen 2" },
];

// Filmler için endpointleri işleyin
router.get("/", (req, res) => {
  res.json(filmler);
});

router.post("/", (req, res) => {
  const yeniFilm = req.body;
  filmler.push(yeniFilm);
  res.status(201).json(yeniFilm);
});

module.exports = router;
