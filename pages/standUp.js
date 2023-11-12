const express = require("express");
const router = express.Router();
const path = require("path");

const standUp = [
  {
    id: 1,
    categories: "standUp",
    name: "Doğu Demirkol",
    title: "Komedi Festivali",
    cities: "İstanbul",
    livingRoom: "Bostancı Gösteri Merkezi",
    explanation:
      "Doğu Demirkol'la stund-up gösterisi. 1 saat 30 dakika sürecek gösteriye katılmak için biletinizi alın.",
    prices: {
      price1: 190,
      price2: 250,
      price3: 370,
    },
    resim: "/standUp1.jpg",
    startDate: "2023-11-01",
    endDate: "2023-11-15",
  },
  {
    id: 2,
    categories: "standUp",
    name: "Sergen Deveci",
    title: "İndirim Festivali",
    cities: "İstanbul",
    livingRoom: "Watergarden Gösteri Merkezi - Duru Tiyatro",
    explanation:
      "Instagram'da çektiği videolarla milyonların beğenisini ve sevgisini kazanan Sergen Deveci, tek kişilik stand-up gösterisi ile sizlerle.",
    prices: {
      price1: 150,
      price2: 230,
      price3: 290,
    },
    resim: "/standUp2.jpg",
    startDate: "2023-10-15",
    endDate: "2023-10-30",
  },
  {
    id: 3,
    categories: "standUp",
    name: "Mesut Süre",
    title: "Talk Show",
    cities: "İstanbul",
    livingRoom: "Watergarden Gösteri Merkezi - Duru Tiyatro",
    explanation:
      "Mesut Süre İle İlişki Testi çiftlerin tanışma hikayelerinden kıskançlıklarına, eski sevgililerinden arkadaşlarıyla ve aileleriyle bir çift olarak kurdukları ilişkiye kadar pek çok şeyi, Mesut Süre’nin yer yer keskin ama her daim eğlenceli ve neşeli moderatörlüğü eşliğinde paylaştıkları bir talk Show formatıdır. ",
    prices: {
      price1: 220,
      price2: 290,
      price3: 350,
    },
    resim: "/standUp3.jpg",
    startDate: "2023-12-05",
    endDate: "2023-12-20",
  },
  {
    id: 4,
    categories: "standUp",
    name: "Meksika Açmazı",
    title: "Komedi Festivali",
    cities: "İstanbul",
    livingRoom: "Mall of İstanbul MOİ Sahne",
    explanation:
      "Mesut Süre, Anlatanadam ve Fazlı Polat'ın benzersiz sahne performanslarıyla Meksika Açmazı, artık sadece podcast olarak değil canlı bir gösteri olarak da kesintisiz kahkaha vadediyor...",
    prices: {
      price1: 350,
      price2: 430,
      price3: 490,
    },
    resim: "/standUp4.jpg",
    startDate: "2023-11-10",
    endDate: "2023-11-25",
  },
  {
    id: 5,
    categories: "standUp",
    name: "Zafer Algöz & Can Yılmaz- Burda Olan Burda Kalır",
    title: "Komedi Festivali",
    cities: "İstanbul",
    livingRoom: "İş Sana İş Kuleleri Salonu",
    explanation:
      "Sosyal medyada paylaşımları ve Burda Olan Burda Kalır adını verdikleri milyonlarca izlenmeye sahip YouTube kanalları ile çok beğenilen Zafer Algöz ve Can Yılmaz, aynı adı verdikleri, farklı içerik ile gerçekleştirdikleri iki kişilik stand-up gösterileri “Burda Olan Burda Kalır”ı İstanbul Komedi Festival’i kapsamında izleyebilirsiniz. ",
    prices: {
      price1: 330,
      price2: 400,
      price3: 450,
    },
    resim: "/standUp5.jpg",
    startDate: "2023-09-01",
    endDate: "2023-09-15",
  },
  {
    id: 6,
    categories: "standUp",
    name: "Okan Çabalar",
    title: "İndirim Festivali",
    cities: "İstanbul",
    livingRoom: "Trump AVM Sahne",
    explanation:
      "Yer aldığı birçok skeç programı, dizi ve filmlerde yarattığı başarılı tiplemelerle mizahseverlerin beğenisini kazanan Okan Çabalar, izleyicisiyle buluşmaya devam ediyor. ",
    prices: {
      price1: 230,
      price2: 300,
      price3: 350,
    },
    resim: "/standUp6.jpg",
    startDate: "2023-10-01",
    endDate: "2023-10-15",
  },
  {
    id: 7,
    categories: "standUp",
    name: "İlker Gümüşoluk",
    title: "Komedi Festivali",
    cities: "İstanbul",
    livingRoom: "Watergarden Gösteri Merkezi - Duru Tiyatro",
    explanation:
      "İlker Gümüşoluk, tek kişilik gösterisiyle izleyicisiyle buluşmaya devam ediyor. 15 Yıldır Türkiye’nin her köşesinde 1000’den fazla gösteri yapan İlker Gümüşoluk, tek kişilik gösterisinde ikili ilişkiler başta olmak üzere, hayata dair birçok hikaye ve tespitini seyircisiyle buluşturuyor. Komedyen, özellikle YouTube kanalında yayınladığı Apartman Sohbetleri projesiyle ve instagram hesabında paylaştığı skeçlerle ciddi bir seyirci kitlesine ulaştı. İlker Gümüşoluk aynı zamanda son iki yıldır YouTube Değişim Elçiliği görevini üstlendi. YouTube için özel projeler üretiyor. ",
    prices: {
      price1: 250,
      price2: 330,
      price3: 370,
    },
    resim: "/standUp7.jpg",
    startDate: "2023-12-10",
    endDate: "2023-12-25",
  },
  {
    id: 8,
    categories: "standUp",
    name: "Deniz Göktaş",
    title: "Komedi Festivali",
    cities: "İstanbul",
    livingRoom: "Beşiktaş Kültür Merkezi",
    explanation:
      "Deniz Göktaş: Youtube’a yüklediği tek kişilik Stand-Up Gösterisi “Selam Selam” ve “Deniz Göktaş’a Ayıracak Vaktim Yok” Podcast’inden tanıyabileceğiniz Deniz Göktaş yeni tek kişilik gösterisi ile 3 Aralık tarihinde Bkm Tiyatro’da. ",
    prices: {
      price1: 200,
      price2: 250,
      price3: 300,
    },
    resim: "/standUp8.jpg",
    startDate: "2023-11-20",
    endDate: "2023-12-05",
  },
  {
    id: 9,
    categories: "standUp",
    name: "Tahsin Hasoğlu",
    title: "Komedi Festivali",
    cities: "İstanbul",
    livingRoom: "Trump AVM Sahne",
    explanation:
      "Tahsin Hasoğlu, sosyal medya hesaplarından paylaştığı 'Başakşehir'in Tek Taraftarı', 'Gamsız Teknik Direktör Arif', 'Kafa Adam İrfan' adlı videolarla kısa sürede yüz binlerce takipçiye ulaştı. 200'ün üzerinde içerik hazırlayan Hasoğlu, üzerinde içerik hazırlayan Tahsin Hasoğlu, tek kişilik stand-up gösterisiyle sahnelerde de kahkaha attırıyor.",
    prices: {
      price1: 170,
      price2: 230,
      price3: 280,
    },
    resim: "/standUp9.jpg",
    startDate: "2023-09-15",
    endDate: "2023-09-30",
  },
  {
    id: 10,
    categories: "standUp",
    name: "Özgür Turhan",
    title: "İndirim Festivali",
    cities: "İstanbul",
    livingRoom: "Trump AVM Sahne",
    explanation:
      "Kamusal Mizah’ın kurucusu Komedyen Özgür Turhan, hiciv dolu gösterisi ile seyirciyle buluşuyor. 'Etkinlik Süresi: 2 perde - 1 saat 45 dakika'",
    prices: {
      price1: 230,
      price2: 300,
      price3: 350,
    },
    resim: "/standUp10.jpg",
    startDate: "2023-10-30",
    endDate: "2023-11-10",
  },
  {
    id: 11,
    categories: "standUp",
    name: "Cem İşçiler & Fazlı Polat - Çimen Show",
    title: "Talk Show",
    cities: "İstanbul",
    livingRoom: "İş Sana İş Kuleleri Salonu",
    explanation:
      "Cem İşçiler & Fazlı Polat - Çimen Talks Show ile sizlerle. Sen de bu geceye dahil olmak istiyorsan unutma ki; Çimen Talks Show'a katılmak için biletinizi alın.",
    prices: {
      price1: 430,
      price2: 500,
      price3: 550,
    },
    resim: "/standUp11.jpg",
    startDate: "2023-09-20",
    endDate: "2023-10-05",
  },
  {
    id: 12,
    categories: "standUp",
    name: "Burak Satıbol",
    title: "İndirim Festivali",
    cities: "İstanbul",
    livingRoom: "Kartal Sanal Tiyatrosu Salonu",
    explanation:
      "İşler Güçler’in Salih abisi, Yusuf Yusuf’un Yusuf’u, Mahşer-i Cümbüş’ün Burak’ı, hikayelerini anlatmaya geliyor. Kimi zaman sinema aleminden, kimi zaman ilk gençliğinden kızgınlıkları, mutlulukları ve cevap bulamadıkları ile seyircisini oyun oynamaya çağırıyor. ",
    prices: {
      price1: 210,
      price2: 250,
      price3: 300,
    },
    resim: "/standUp12.jpg",
    startDate: "2023-12-01",
    endDate: "2023-12-15",
  },
  {
    id: 13,
    categories: "standUp",
    name: "Sefa Doğanay",
    title: "Komedi Festivali",
    cities: "İstanbul",
    livingRoom: "Beşiktaş Kültür Merkezi",
    explanation: "Sefa Doğanay - Kokpit sizlerle...",
    prices: {
      price1: 230,
      price2: 290,
      price3: 350,
    },
    resim: "/standUp13.jpg",
    startDate: "2023-10-10",
    endDate: "2023-10-25",
  },
  {
    id: 14,
    categories: "standUp",
    name: "Armağan Çağlayan ile 'Size Anlatacaklarım Var'",
    title: "Talk Show",
    cities: "İstanbul",
    livingRoom: "Cevahir Sahne Salon A",
    explanation:
      "Türkiye’nin en önemli televizyon yapımcılarından Armağan Çağlayan, sektörde 30 yılı geride bırakmaya hazırlanırken, milyonların izlediği YouTube kanalında da yaptığı “sıra dışı” röportajlarla da gündemin nabzını tutmaya, dikkatleri çekmeye devam ediyor.  ",
    prices: {
      price1: 230,
      price2: 300,
      price3: 350,
    },
    resim: "/standUp14.jpg",
    startDate: "2023-11-25",
    endDate: "2023-12-10",
  },
  {
    id: 15,
    categories: "standUp",
    name: "Özgür Uysal ile İnce İşler",
    title: "Komedi Festivali",
    cities: "İstanbul",
    livingRoom: "Jolly Joker Pub Kanyon",
    explanation:
      "Youtube'da kadın-erkek ilişkileri, cinsel yanlışlar, psikolojik ve sosyolojik taktiklerden oluşan video serileriyle bilinen Özgür Uysal tabulardan uzak bir dünyayı vadediyor bize. ",
    prices: {
      price1: 320,
      price2: 400,
      price3: 480,
    },
    resim: "/standUp15.jpg",
    startDate: "2023-09-15",
    endDate: "2023-09-30",
  },
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
