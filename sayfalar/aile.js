const express = require("express");
const router = express.Router();

// Aile etkinlikleri verilerini içeri aktarın
const aile = [
  {
    id: 1,
    ad: "Aile Etkinliği 1",
    kategori: "aile",
    sehir: "Ankara",
    fiyat: 50,
    resim: "aile1.jpg",
  },
  {
    id: 2,
    ad: "Aile Etkinliği 2",
    kategori: "aile",
    sehir: "İstanbul",
    fiyat: 60,
    resim: "aile2.jpg",
  },
];

// Aile için endpointleri işleyin
router.get("/", (req, res) => {
  res.json(aile);
});

router.post("/", (req, res) => {
  const yeniAile = req.body;
  const yeniID = Math.max(...aile.map((item) => item.id)) + 1;
  yeniAile.id = yeniID;
  aile.push(yeniAile);
  res.status(201).json(yeniAile);
});

// Belirli bir aile etkinliğini almak için endpoint
router.get("/:aileId", (req, res) => {
  const aileId = parseInt(req.params.aileId);
  const hedefAileEtkinligi = aile.find((etkinlik) => etkinlik.id === aileId);

  if (hedefAileEtkinligi) {
    res.json(hedefAileEtkinligi);
  } else {
    res.status(404).json({ hata: "Aile etkinliği bulunamadı" });
  }
});

module.exports = router;
