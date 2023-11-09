const express = require("express");
const router = express.Router();

// Film verilerini içeri aktarın
const filmler = [
  {
    id: 1,
    categories: "konser",
    cities: "İstanbul",
    price: 120,
    resim: "/public/konser1.jpg",
    startDate: "2023-11-01",
    endDate: "2023-11-15",
  },
  {
    id: 2,
    categories: "konser",
    cities: "Kocaeli",
    price: 90,
    resim: "/public/konser2.jpg",
    startDate: "2023-10-15",
    endDate: "2023-10-30",
  },
  {
    id: 3,
    categories: "konser",
    cities: "Ankara",
    price: 110,
    resim: "/public/konser3.jpg",
    startDate: "2023-12-05",
    endDate: "2023-12-20",
  },
  {
    id: 4,
    categories: "konser",
    cities: "Izmir",
    price: 95,
    resim: "/public/konser4.jpg",
    startDate: "2023-11-10",
    endDate: "2023-11-25",
  },
  {
    id: 5,
    categories: "konser",
    cities: "Antalya",
    price: 130,
    resim: "/public/konser5.jpg",
    startDate: "2023-09-01",
    endDate: "2023-09-15",
  },
  {
    id: 6,
    categories: "konser",
    cities: "Bursa",
    price: 85,
    resim: "/public/konser6.jpg",
    startDate: "2023-10-01",
    endDate: "2023-10-15",
  },
  {
    id: 7,
    categories: "konser",
    cities: "Mersin",
    price: 125,
    resim: "/public/konser7.jpg",
    startDate: "2023-12-10",
    endDate: "2023-12-25",
  },
  {
    id: 8,
    categories: "konser",
    cities: "Gaziantep",
    price: 100,
    resim: "/public/konser8.jpg",
    startDate: "2023-11-20",
    endDate: "2023-12-05",
  },
  {
    id: 9,
    categories: "konser",
    cities: "Eskişehir",
    price: 105,
    resim: "/public/konser9.jpg",
    startDate: "2023-09-15",
    endDate: "2023-09-30",
  },
  {
    id: 10,
    categories: "konser",
    cities: "Trabzon",
    price: 140,
    resim: "/public/konser10.jpg",
    startDate: "2023-10-30",
    endDate: "2023-11-10",
  },
  // Devam eden veriler buraya eklenir...
  {
    id: 11,
    categories: "konser",
    cities: "Adana",
    price: 115,
    resim: "/public/konser11.jpg",
    startDate: "2023-09-20",
    endDate: "2023-10-05",
  },
  {
    id: 12,
    categories: "konser",
    cities: "Bolu",
    price: 80,
    resim: "/public/konser12.jpg",
    startDate: "2023-12-01",
    endDate: "2023-12-15",
  },
  {
    id: 13,
    categories: "konser",
    cities: "Malatya",
    price: 105,
    resim: "/public/konser13.jpg",
    startDate: "2023-10-10",
    endDate: "2023-10-25",
  },
  {
    id: 14,
    categories: "konser",
    cities: "Samsun",
    price: 95,
    resim: "/public/konser14.jpg",
    startDate: "2023-11-25",
    endDate: "2023-12-10",
  },
  {
    id: 15,
    categories: "konser",
    cities: "Konya",
    price: 120,
    resim: "/public/konser15.jpg",
    startDate: "2023-09-15",
    endDate: "2023-09-30",
  },
  {
    id: 16,
    categories: "konser",
    cities: "Trabzon",
    price: 110,
    resim: "/public/konser16.jpg",
    startDate: "2023-12-15",
    endDate: "2023-12-30",
  },
  {
    id: 17,
    categories: "konser",
    cities: "Van",
    price: 100,
    resim: "/public/konser17.jpg",
    startDate: "2023-10-05",
    endDate: "2023-10-20",
  },
  {
    id: 18,
    categories: "konser",
    cities: "Sivas",
    price: 85,
    resim: "/public/konser18.jpg",
    startDate: "2023-11-05",
    endDate: "2023-11-20",
  },
  {
    id: 19,
    categories: "konser",
    cities: "Tekirdağ",
    price: 95,
    resim: "/public/konser19.jpg",
    startDate: "2023-09-30",
    endDate: "2023-10-15",
  },
  {
    id: 20,
    categories: "konser",
    cities: "Denizli",
    price: 120,
    resim: "/public/konser20.jpg",
    startDate: "2023-10-20",
    endDate: "2023-11-05",
  },
  {
    id: 21,
    categories: "konser",
    cities: "Mardin",
    price: 110,
    resim: "/public/konser21.jpg",
    startDate: "2023-11-15",
    endDate: "2023-11-30",
  },
  {
    id: 22,
    categories: "konser",
    cities: "Zonguldak",
    price: 95,
    resim: "/public/konser22.jpg",
    startDate: "2023-09-05",
    endDate: "2023-09-20",
  },
  {
    id: 23,
    categories: "konser",
    cities: "Kahramanmaraş",
    price: 130,
    resim: "/public/konser23.jpg",
    startDate: "2023-12-30",
    endDate: "2023-01-15",
  },
  {
    id: 24,
    categories: "konser",
    cities: "Kırşehir",
    price: 100,
    resim: "/public/konser24.jpg",
    startDate: "2023-09-25",
    endDate: "2023-10-10",
  },
  {
    id: 25,
    categories: "konser",
    cities: "Sinop",
    price: 120,
    resim: "/public/konser25.jpg",
    startDate: "2023-10-15",
    endDate: "2023-10-30",
  },
  {
    id: 26,
    categories: "konser",
    cities: "Giresun",
    price: 110,
    resim: "/public/konser26.jpg",
    startDate: "2023-11-30",
    endDate: "2023-12-15",
  },
  {
    id: 27,
    categories: "konser",
    cities: "Şanlıurfa",
    price: 125,
    resim: "/public/konser27.jpg",
    startDate: "2023-09-10",
    endDate: "2023-09-25",
  },
  {
    id: 28,
    categories: "konser",
    cities: "Siirt",
    price: 95,
    resim: "/public/konser28.jpg",
    startDate: "2023-11-20",
    endDate: "2023-12-05",
  },
  {
    id: 29,
    categories: "konser",
    cities: "Kars",
    price: 120,
    resim: "/public/konser29.jpg",
    startDate: "2023-12-20",
    endDate: "2023-01-05",
  },
  {
    id: 30,
    categories: "konser",
    cities: "Çankırı",
    price: 105,
    resim: "/public/konser30.jpg",
    startDate: "2023-09-20",
    endDate: "2023-10-05",
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