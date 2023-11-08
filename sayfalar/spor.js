const express = require("express");
const router = express.Router();

// Spor etkinlikleri verilerini içeri aktarın
const spor = [
  {
    id: 1,
    ad: "Spor Etkinliği 1",
    sporDali: "Basketbol",
    tarih: "2023-12-05",
    kategori: "spor",
    sehir: "İzmir",
    fiyat: 70,
    resim: "spor1.jpg",
  },
  {
    id: 2,
    ad: "Spor Etkinliği 2",
    sporDali: "Futbol",
    tarih: "2023-12-12",
    kategori: "spor",
    sehir: "Ankara",
    fiyat: 80,
    resim: "spor2.jpg",
  },
];

// Spor için endpointleri işleyin
router.get("/", (req, res) => {
  res.json(spor);
});

router.post("/", (req, res) => {
  const yeniSpor = req.body;
  const yeniID = Math.max(...spor.map((item) => item.id)) + 1;
  yeniSpor.id = yeniID;
  spor.push(yeniSpor);
  res.status(201).json(yeniSpor);
});

// Belirli bir spor etkinliğini almak için endpoint
router.get("/:sporId", (req, res) => {
  const sporId = parseInt(req.params.sporId);
  const hedefSporEtkinligi = spor.find((etkinlik) => etkinlik.id === sporId);

  if (hedefSporEtkinligi) {
    res.json(hedefSporEtkinligi);
  } else {
    res.status(404).json({ hata: "Spor etkinliği bulunamadı" });
  }
});

module.exports = router;
