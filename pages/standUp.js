const express = require("express");
const router = express.Router();
const path = require("path");

const standUp = [
  {
    id: 1,
    categories: "standUp",
    cities: "İstanbul",
    price: 120,
    resim: "/standUp1.jpg",
    startDate: "2023-11-01",
    endDate: "2023-11-15",
  },
  {
    id: 2,
    categories: "standUp",
    cities: "Kocaeli",
    price: 90,
    resim: "/standUp2.jpg",
    startDate: "2023-10-15",
    endDate: "2023-10-30",
  },
  {
    id: 3,
    categories: "standUp",
    cities: "Ankara",
    price: 110,
    resim: "/standUp3.jpg",
    startDate: "2023-12-05",
    endDate: "2023-12-20",
  },
  {
    id: 4,
    categories: "standUp",
    cities: "İzmir",
    price: 95,
    resim: "/standUp4.jpg",
    startDate: "2023-11-10",
    endDate: "2023-11-25",
  },
  {
    id: 5,
    categories: "standUp",
    cities: "Antalya",
    price: 130,
    resim: "/standUp5.jpg",
    startDate: "2023-09-01",
    endDate: "2023-09-15",
  },
  {
    id: 6,
    categories: "standUp",
    cities: "Bursa",
    price: 85,
    resim: "/standUp6.jpg",
    startDate: "2023-10-01",
    endDate: "2023-10-15",
  },
  {
    id: 7,
    categories: "standUp",
    cities: "Mersin",
    price: 125,
    resim: "/standUp7.jpg",
    startDate: "2023-12-10",
    endDate: "2023-12-25",
  },
  {
    id: 8,
    categories: "standUp",
    cities: "Gaziantep",
    price: 100,
    resim: "/standUp8.jpg",
    startDate: "2023-11-20",
    endDate: "2023-12-05",
  },
  {
    id: 9,
    categories: "standUp",
    cities: "Eskişehir",
    price: 105,
    resim: "/standUp9.jpg",
    startDate: "2023-09-15",
    endDate: "2023-09-30",
  },
  {
    id: 10,
    categories: "standUp",
    cities: "Trabzon",
    price: 140,
    resim: "/standUp10.jpg",
    startDate: "2023-10-30",
    endDate: "2023-11-10",
  },
  {
    id: 11,
    categories: "standUp",
    cities: "Adana",
    price: 115,
    resim: "/standUp11.jpg",
    startDate: "2023-09-20",
    endDate: "2023-10-05",
  },
  {
    id: 12,
    categories: "standUp",
    cities: "Bolu",
    price: 80,
    resim: "/standUp12.jpg",
    startDate: "2023-12-01",
    endDate: "2023-12-15",
  },
  {
    id: 13,
    categories: "standUp",
    cities: "Malatya",
    price: 105,
    resim: "/standUp13.jpg",
    startDate: "2023-10-10",
    endDate: "2023-10-25",
  },
  {
    id: 14,
    categories: "standUp",
    cities: "Samsun",
    price: 95,
    resim: "/standUp14.jpg",
    startDate: "2023-11-25",
    endDate: "2023-12-10",
  },
  {
    id: 15,
    categories: "standUp",
    cities: "Konya",
    price: 120,
    resim: "/standUp15.jpg",
    startDate: "2023-09-15",
    endDate: "2023-09-30",
  },
  // Diğer stand-up verileri buraya eklenir...
];

router.get("/", (req, res) => {
  res.json(standUp);
});

router.post("/", (req, res) => {
  const yeniStandUp = req.body;
  const yeniID = Math.max(...standUp.map((item) => item.id)) + 1;
  yeniStandUp.id = yeniID;

  const yeniResimAdi = `standUp${yeniID}.jpg`;
  yeniStandUp.resim = `/${yeniResimAdi}`;

  standUp.push(yeniStandUp);
  res.status(201).json(yeniStandUp);
});

router.get("/:standUpId", (req, res) => {
  const standUpId = parseInt(req.params.standUpId);
  const hedefStandUp = standUp.find((standUp) => standUp.id === standUpId);

  if (hedefStandUp) {
    const standUpWithFullResimPath = {
      ...hedefStandUp,
      resim: path.join(__dirname, `public/${hedefStandUp.resim}`),
    };
    res.json(standUpWithFullResimPath);
  } else {
    res.status(404).json({ hata: "Stand-up bulunamadı" });
  }
});

module.exports = router;
