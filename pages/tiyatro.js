const express = require("express");
const router = express.Router();
const path = require("path");

const tiyatro = [
  {
    id: 1,
    categories: "tiyatro",
    cities: "İstanbul",
    price: 120,
    resim: "/tiyatro1.jpg",
    startDate: "2023-11-01",
    endDate: "2023-11-15",
  },
  {
    id: 2,
    categories: "tiyatro",
    cities: "Kocaeli",
    price: 90,
    resim: "/tiyatro2.jpg",
    startDate: "2023-10-15",
    endDate: "2023-10-30",
  },
  {
    id: 3,
    categories: "tiyatro",
    cities: "Ankara",
    price: 110,
    resim: "/tiyatro3.jpg",
    startDate: "2023-12-05",
    endDate: "2023-12-20",
  },
  {
    id: 4,
    categories: "tiyatro",
    cities: "Izmir",
    price: 95,
    resim: "/tiyatro4.jpg",
    startDate: "2023-11-10",
    endDate: "2023-11-25",
  },
  {
    id: 5,
    categories: "tiyatro",
    cities: "Antalya",
    price: 130,
    resim: "/tiyatro5.jpg",
    startDate: "2023-09-01",
    endDate: "2023-09-15",
  },
  {
    id: 6,
    categories: "tiyatro",
    cities: "Bursa",
    price: 85,
    resim: "/tiyatro6.jpg",
    startDate: "2023-10-01",
    endDate: "2023-10-15",
  },
  {
    id: 7,
    categories: "tiyatro",
    cities: "Mersin",
    price: 125,
    resim: "/tiyatro7.jpg",
    startDate: "2023-12-10",
    endDate: "2023-12-25",
  },
  {
    id: 8,
    categories: "tiyatro",
    cities: "Gaziantep",
    price: 100,
    resim: "/tiyatro8.jpg",
    startDate: "2023-11-20",
    endDate: "2023-12-05",
  },
  {
    id: 9,
    categories: "tiyatro",
    cities: "Eskişehir",
    price: 105,
    resim: "/tiyatro9.jpg",
    startDate: "2023-09-15",
    endDate: "2023-09-30",
  },
  {
    id: 10,
    categories: "tiyatro",
    cities: "Trabzon",
    price: 140,
    resim: "/tiyatro10.jpg",
    startDate: "2023-10-30",
    endDate: "2023-11-10",
  },
  {
    id: 11,
    categories: "tiyatro",
    cities: "Adana",
    price: 115,
    resim: "/tiyatro11.jpg",
    startDate: "2023-09-20",
    endDate: "2023-10-05",
  },
  {
    id: 12,
    categories: "tiyatro",
    cities: "Bolu",
    price: 80,
    resim: "/tiyatro12.jpg",
    startDate: "2023-12-01",
    endDate: "2023-12-15",
  },
  {
    id: 13,
    categories: "tiyatro",
    cities: "Malatya",
    price: 105,
    resim: "/tiyatro13.jpg",
    startDate: "2023-10-10",
    endDate: "2023-10-25",
  },
  {
    id: 14,
    categories: "tiyatro",
    cities: "Samsun",
    price: 95,
    resim: "/tiyatro14.jpg",
    startDate: "2023-11-25",
    endDate: "2023-12-10",
  },
  {
    id: 15,
    categories: "tiyatro",
    cities: "Konya",
    price: 120,
    resim: "/tiyatro15.jpg",
    startDate: "2023-09-15",
    endDate: "2023-09-30",
  },
  // Devam eden veriler buraya eklenir...
];

router.get("/", (req, res) => {
  res.json(tiyatro);
});

router.post("/", (req, res) => {
  const yeniTiyatro = req.body;
  const yeniID = Math.max(...tiyatro.map((item) => item.id)) + 1;
  yeniTiyatro.id = yeniID;

  const yeniResimAdi = `tiyatro${yeniID}.jpg`;
  yeniTiyatro.resim = `/${yeniResimAdi}`;

  tiyatro.push(yeniTiyatro);
  res.status(201).json(yeniTiyatro);
});

router.get("/:tiyatroId", (req, res) => {
  const tiyatroId = parseInt(req.params.tiyatroId);
  const hedefTiyatro = tiyatro.find((tiyatro) => tiyatro.id === tiyatroId);

  if (hedefTiyatro) {
    const tiyatroWithFullResimPath = {
      ...hedefTiyatro,
      resim: path.join(__dirname, `public/${hedefTiyatro.resim}`),
    };
    res.json(tiyatroWithFullResimPath);
  } else {
    res.status(404).json({ hata: "Tiyatro bulunamadı" });
  }
});

module.exports = router;
