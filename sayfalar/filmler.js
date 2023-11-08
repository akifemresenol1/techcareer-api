const express = require("express");
const router = express.Router();

// Film verilerini içeri aktarın
const filmler = [
  {
    id: 1,
    categories: "film",
    cities: "İstanbul",
    price: "100",
    resim: "film1.jpg",
  },
  {
    id: 2,
    categories: "film",
    cities: "Kocaeli",
    price: "120",
    resim: "film2.jpg",
  },
];

// Filmler için endpointleri işleyin
router.get("/", (req, res) => {
  res.json(filmler);
});

router.post("/", (req, res) => {
  const yeniFilm = req.body;
  // Yeni bir ID oluşturun, bu ID'yi benzersiz yapmalısınız.
  // Örneğin, en büyük mevcut ID'nin bir fazlasını kullanabilirsiniz.
  const yeniID = Math.max(...filmler.map((item) => item.id)) + 1;
  yeniFilm.id = yeniID;
  filmler.push(yeniFilm);
  res.status(201).json(yeniFilm);
});

// Router içinde endpoint tanımlaması
router.get("/:filmId", (req, res) => {
  const filmId = parseInt(req.params.filmId);
  const hedefFilm = filmler.find((film) => film.id === filmId);

  if (hedefFilm) {
    res.json(hedefFilm);
  } else {
    res.status(404).json({ hata: "Film bulunamadı" });
  }
});

module.exports = router;
