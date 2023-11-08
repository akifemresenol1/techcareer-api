const express = require("express");
const router = express.Router();

// Tiyatro verilerini içeri aktarın
const tiyatro = [
  {
    id: 1,
    ad: "Tiyatro Oyunu 1",
    tarih: "2023-12-01",
    kategori: "tiyatro",
    sehir: "İstanbul",
    fiyat: "150",
    resim: "tiyatro1.jpg",
  },
  {
    id: 2,
    ad: "Tiyatro Oyunu 2",
    tarih: "2023-12-10",
    kategori: "tiyatro",
    sehir: "Ankara",
    fiyat: "120",
    resim: "tiyatro2.jpg",
  },
];

// Tiyatro için endpointleri işleyin
router.get("/", (req, res) => {
  res.json(tiyatro);
});

router.post("/", (req, res) => {
  const yeniTiyatro = req.body;
  // Yeni bir ID oluşturun, bu ID'yi benzersiz yapmalısınız.
  // Örneğin, en büyük mevcut ID'nin bir fazlasını kullanabilirsiniz.
  const yeniID = Math.max(...tiyatro.map((item) => item.id)) + 1;
  yeniTiyatro.id = yeniID;
  tiyatro.push(yeniTiyatro);
  res.status(201).json(yeniTiyatro);
});

// Router içinde endpoint tanımlaması
router.get("/:tiyatroId", (req, res) => {
  const tiyatroId = parseInt(req.params.tiyatroId);
  const hedefTiyatro = tiyatro.find((tiyatro) => tiyatro.id === tiyatroId);

  if (hedefTiyatro) {
    res.json(hedefTiyatro);
  } else {
    res.status(404).json({ hata: "Tiyatro oyunu bulunamadı" });
  }
});

module.exports = router;
