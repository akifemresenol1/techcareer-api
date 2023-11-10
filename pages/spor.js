const express = require("express");
const router = express.Router();
const path = require("path");

const spor = [
  {
    id: 1,
    categories: "spor",
    cities: "İstanbul",
    price: 120,
    resim: "/spor1.jpg",
    startDate: "2023-11-01",
    endDate: "2023-11-15",
  },
  {
    id: 2,
    categories: "spor",
    cities: "Kocaeli",
    price: 90,
    resim: "/spor2.jpg",
    startDate: "2023-10-15",
    endDate: "2023-10-30",
  },
  {
    id: 3,
    categories: "spor",
    cities: "Ankara",
    price: 110,
    resim: "/spor3.jpg",
    startDate: "2023-12-05",
    endDate: "2023-12-20",
  },
  {
    id: 4,
    categories: "spor",
    cities: "Izmir",
    price: 95,
    resim: "/spor4.jpg",
    startDate: "2023-11-10",
    endDate: "2023-11-25",
  },
  {
    id: 5,
    categories: "spor",
    cities: "Antalya",
    price: 130,
    resim: "/spor5.jpg",
    startDate: "2023-09-01",
    endDate: "2023-09-15",
  },
  {
    id: 6,
    categories: "spor",
    cities: "Bursa",
    price: 85,
    resim: "/spor6.jpg",
    startDate: "2023-10-01",
    endDate: "2023-10-15",
  },
  {
    id: 7,
    categories: "spor",
    cities: "Mersin",
    price: 125,
    resim: "/spor7.jpg",
    startDate: "2023-12-10",
    endDate: "2023-12-25",
  },
  {
    id: 8,
    categories: "spor",
    cities: "Gaziantep",
    price: 100,
    resim: "/spor8.jpg",
    startDate: "2023-11-20",
    endDate: "2023-12-05",
  },
  {
    id: 9,
    categories: "spor",
    cities: "Eskişehir",
    price: 105,
    resim: "/spor9.jpg",
    startDate: "2023-09-15",
    endDate: "2023-09-30",
  },
  {
    id: 10,
    categories: "spor",
    cities: "Trabzon",
    price: 140,
    resim: "/spor10.jpg",
    startDate: "2023-10-30",
    endDate: "2023-11-10",
  },
  {
    id: 11,
    categories: "spor",
    cities: "Adana",
    price: 115,
    resim: "/spor11.jpg",
    startDate: "2023-09-20",
    endDate: "2023-10-05",
  },
  {
    id: 12,
    categories: "spor",
    cities: "Bolu",
    price: 80,
    resim: "/spor12.jpg",
    startDate: "2023-12-01",
    endDate: "2023-12-15",
  },
  {
    id: 13,
    categories: "spor",
    cities: "Malatya",
    price: 105,
    resim: "/spor13.jpg",
    startDate: "2023-10-10",
    endDate: "2023-10-25",
  },
  {
    id: 14,
    categories: "spor",
    cities: "Samsun",
    price: 95,
    resim: "/spor14.jpg",
    startDate: "2023-11-25",
    endDate: "2023-12-10",
  },
  {
    id: 15,
    categories: "spor",
    cities: "Konya",
    price: 120,
    resim: "/spor15.jpg",
    startDate: "2023-09-15",
    endDate: "2023-09-30",
  },
  // Devam eden veriler buraya eklenir...
];

router.get("/", (req, res) => {
  res.json(spor);
});

router.post("/", (req, res) => {
  const yeniSpor = req.body;
  const yeniID = Math.max(...spor.map((item) => item.id)) + 1;
  yeniSpor.id = yeniID;

  const yeniResimAdi = `spor${yeniID}.jpg`;
  yeniSpor.resim = `/${yeniResimAdi}`;

  spor.push(yeniSpor);
  res.status(201).json(yeniSpor);
});

router.get("/:sporId", (req, res) => {
  const sporId = parseInt(req.params.sporId);
  const hedefSpor = spor.find((spor) => spor.id === sporId);

  if (hedefSpor) {
    const sporWithFullResimPath = {
      ...hedefSpor,
      resim: path.join(__dirname, `public/${hedefSpor.resim}`),
    };
    res.json(sporWithFullResimPath);
  } else {
    res.status(404).json({ hata: "Spor etkinliği bulunamadı" });
  }
});

module.exports = router;
