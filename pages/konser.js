const express = require("express");
const router = express.Router();
const path = require("path");

const konser = [
  {
    id: 1,
    categories: "konser",
    cities: "İstanbul",
    name: "Cem Adrian Konseri",
    title: "Yaz Konserleri",
    livingRoom: "Hayal Kahvesi Atakent",
    coordinate: [41.05293223119765, 28.79118510976744],
    explanation:
      "Duygusal şarkılarıyla ruhumuza dokunan, hislerimize tercüman olan Cem Adrian sevenleriyle hız kesmeden buluşmaya devam ediyor.",
    prices: {
      price1: 370,
      price2: 420,
      price3: 520,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser1.jpg",
    startDate: "2023-11-01",
    endDate: "2023-11-15",
  },
  {
    id: 2,
    categories: "konser",
    cities: "Kocaeli",
    name: "Melike Şahin Konseri",
    title: "Efsane Geri Dönüş",
    livingRoom: "Kocaeli Kongre Merkezi",
    coordinate: [40.76132054117997, 29.896017282766152],
    explanation:
      "Melike Şahin, uzun bir aranın ardından Kocaeli Arena'da hayranlarıyla buluşuyor.",
    prices: {
      price1: 620,
      price2: 700,
      price3: 780,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser2.jpg",
    startDate: "2023-10-15",
    endDate: "2023-10-30",
  },
  {
    id: 3,
    categories: "konser",
    cities: "Ankara",
    name: "Sıla  Konseri",
    title: "Ankara Geceleri",
    livingRoom: "Ankara Açıkhava Tiyatrosu",
    coordinate: [39.8761513340568, 32.72761252800871],
    explanation:
      "Sıla, unutulmaz şarkılarıyla Ankara Açıkhava Tiyatrosu'nda sevenleriyle buluşacak.",
    prices: {
      price1: 270,
      price2: 350,
      price3: 450,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser3.jpg",
    startDate: "2023-12-05",
    endDate: "2023-12-20",
  },
  {
    id: 4,
    categories: "konser",
    cities: "Izmir",
    name: "Mert Demir Konseri",
    title: "Aşk ve Hüzün",
    livingRoom: "Izmir Fuar Alanı",
    coordinate: [38.465681077577, 27.14532742683459],
    explanation:
      "Mert Demir, duygusal şarkılarıyla Izmir Fuar Alanı'nda müzikseverlere unutulmaz anlar yaşatacak.",
    prices: {
      price1: 380,
      price2: 420,
      price3: 580,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser4.jpg",
    startDate: "2023-11-10",
    endDate: "2023-11-25",
  },
  {
    id: 5,
    categories: "konser",
    cities: "Antalya",
    name: "Gökhan Türkmen Konseri",
    title: "Pop festivali",
    livingRoom: "Sponge Pub Lara Antalya",
    coordinate: [36.85744567729329, 30.73846175005112],
    explanation:
      "2005 yılında çıkardığı ‘Büyük İnsan’ şarkısıyla ismini geniş kitlelere duyurmayı başaran Gökhan Türkmen, ardından çıkardığı ‘Çatı Katı’, ‘Dön’, ‘Bir Öykü’ ve ‘Bitmesin’ şarkılarıyla ismini müzik dünyasına adını yazdırdı. 2005 yılında amatör olarak seslendirdiği Büyük İnsan adlı parçası ile video paylaşım sitesi Youtube'da beş milyondan fazla dinlenen Gökhan Türkmen, dinleyicisiyle buluşmaya devam ediyor.",
    prices: {
      price1: 220,
      price2: 300,
      price3: 380,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser5.jpg",
    startDate: "2023-09-01",
    endDate: "2023-09-15",
  },
  {
    id: 6,
    categories: "konser",
    cities: "Bursa",
    name: "Hayko Cepkin Konseri",
    title: "Rock Rüzgarları",
    livingRoom: " Hayal Kahvesi Bursa ",
    coordinate: [40.22881291249381, 28.91465090972719],
    explanation:
      "Hayko Cepkin, rock müziğin en güçlü şarkılarıyla Bursa Atatürk Stadyumu'nda unutulmaz bir konserle müzikseverlere enerji dolu anlar yaşatacak.",
    prices: {
      price1: 620,
      price2: 700,
      price3: 780,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser6.jpg",
    startDate: "2023-10-01",
    endDate: "2023-10-15",
  },
  {
    id: 7,
    categories: "konser",
    cities: "Mersin",
    name: "Sena Şener Konseri",
    title: "Rock Gecesi",
    livingRoom: "Jolly Joker Mersin",
    coordinate: [36.9304325614795, 34.59004715707827],
    explanation:
      "19 Eylül 1998 yılında Gaziantep'te dünyaya gelen sevilen isim Sena Şener, güçlü sesiyle dinleyenleriyle buluşuyor. 'Bak Bana', 'Ölsem', 'Sevmemeliyiz' gibi şarkılarla bilinen yetenekli genç sanatçıyla, unutulmaz bir gece sizi bekliyor. ",
    prices: {
      price1: 440,
      price2: 500,
      price3: 560,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser7.jpg",
    startDate: "2023-12-10",
    endDate: "2023-12-25",
  },
  {
    id: 8,
    categories: "konser",
    cities: "İzmir",
    name: "Semicenk Konseri",
    title: "Pop şöleni",
    livingRoom: "Izmir Fuar Alanı",
    coordinate: [38.465681077577, 27.14532742683459],
    explanation:
      "Unutmak Öyle Kolay mı Sandın, Herkes Gibisin, Masal Gibi şarkılarıyla ismini duyuran ve kendine has tarzıyla müziğe yeni bir soluk kazandıran Semicenk sizlerle buluşmaya geliyor.",
    prices: {
      price1: 320,
      price2: 400,
      price3: 480,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser8.jpg",
    startDate: "2023-11-20",
    endDate: "2023-12-05",
  },
  {
    id: 9,
    categories: "konser",
    cities: "İstanbul",
    name: "Selda Bağcan Konseri",
    title: "Anadolu rock şöleni",
    livingRoom: "Hayal Kahvesi Atakent",
    coordinate: [41.05293223119765, 28.79118510976744],
    explanation:
      "Selda Bağcan, rock müziğin en güçlü şarkılarıyla Malatya Meydanı'nda unutulmaz bir konserle müzikseverlere enerji dolu anlar yaşatacak.",
    prices: {
      price1: 520,
      price2: 600,
      price3: 680,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser9.jpg",
    startDate: "2023-09-15",
    endDate: "2023-09-30",
  },
  {
    id: 10,
    categories: "konser",
    cities: "Bursa",
    name: "Göksel Konseri",
    title: "Pop rock festivali",
    livingRoom: " Hayal Kahvesi Bursa ",
    coordinate: [40.22881291249381, 28.91465090972719],
    explanation:
      "'Depresyondayım' şarkısıyla ismini geniş kitlelere duyuran Göksel, ardından çıkardığı yeni hitleriyle de kariyerinde adını altın harflerle yazdırdı. Göksel, geçmişten günümüze sevilen şarkılarını hayranlarıyla birlikte seslendirecek. ",
    prices: {
      price1: 370,
      price2: 420,
      price3: 500,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser10.jpg",
    startDate: "2023-10-30",
    endDate: "2023-11-10",
  },
  {
    id: 11,
    categories: "konser",
    cities: "İstanbul",
    name: "Yaşar Konseri",
    title: "Sessiz Geceler",
    livingRoom: "Milyon Performance Hall İstanbul ",
    coordinate: [40.994142326947625, 29.110616365586825],
    explanation:
      "‘Ah nerede 90’lı yılların şarkıları’ dediğimizde akla ilk gelen isimlerden olan Yaşar, konseriyle seyircilerini geçmişte yolculuğa çıkarıyor. ‘Sebepsiz Fırtınam’, ‘Kumralım’, ‘Kör Bıçak’ ve ‘On Bir Ay’ gibi şarkıları Tük Pop Müziğine kazandıran Yaşar, canlı performansıyla izleyicilerini mest ediyor.",
    prices: {
      price1: 320,
      price2: 400,
      price3: 480,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser11.jpg",
    startDate: "2023-09-20",
    endDate: "2023-10-05",
  },
  {
    id: 12,
    categories: "konser",
    cities: "Kocaeli",
    name: "Lil Zey Konseri",
    title: "Rap gecesi",
    livingRoom: "Hayal Kahvesi Kocaeli",
    coordinate: [40.757366470865215, 29.97928486742389],
    explanation:
      "'İyi olduğunuzu kanıtlarsanız kimse sizi ezemez' mottosuyla yola çıkan Lil Zey, 'Eskisi Gibi', 'Heveslenmem' ve '80 Kere' adlı şarkılarıyla bilinmektedir. Lil Zey sizlerle buluşmaya geliyor.",
    prices: {
      price1: 220,
      price2: 300,
      price3: 380,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser12.jpg",
    startDate: "2023-12-01",
    endDate: "2023-12-15",
  },
  {
    id: 13,
    categories: "konser",
    cities: "İzmir",
    name: "İrem Derici Konseri",
    title: "Pop Şöleni",
    livingRoom: "İzmir Arena",
    coordinate: [38.46571467946291, 27.14522013847932],
    explanation:
      "Türk pop müziğinin en enerjik ve esprili kadın vokallerinden İrem Derici, milyonların diline dolanan şarkılarını sevenleriyle birlikte söylüyor. ",
    prices: {
      price1: 350,
      price2: 440,
      price3: 520,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser13.jpg",
    startDate: "2023-10-10",
    endDate: "2023-10-25",
  },
  {
    id: 14,
    categories: "konser",
    cities: "Samsun",
    name: "Pinhani Konseri",
    title: "Rock'ın Sesi",
    livingRoom: "Samsun Amfi Tiyatro",
    coordinate: [41.27515446209063, 36.36410619333816],
    explanation:
      "‘Dünyadan Uzak’, ‘Ne Güzel Güldün’ ve ‘Hele Bi Gel’ gibi dillere pelesenk olmuş şarkılarıyla müzik dünyasındaki yerlerini sağlamlaştıran Pinhani, sahne alıyor. Son dönemde listelerde 'Bilir O Beni' şarkısıyla dinleyicisinin kulaklarının pasını silen Pinhani'nin en sevdiğiniz şarkılarına eşlik etmek için biletlerinizi hemen alın!",
    prices: {
      price1: 370,
      price2: 430,
      price3: 500,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser14.jpg",
    startDate: "2023-11-25",
    endDate: "2023-12-10",
  },
  {
    id: 15,
    categories: "konser",
    cities: "Ankara",
    name: "Can Ozan Konseri",
    title: "Efsane Geri Dönüş",
    livingRoom: "Ankara Milyon Performance Hall",
    coordinate: [39.927828548100074, 32.826741409712696],
    explanation:
      "Can Ozan, uzun bir aranın ardından Konya Arena'da hayranlarıyla buluşuyor.",
    prices: {
      price1: 210,
      price2: 280,
      price3: 360,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser15.jpg",
    startDate: "2023-09-15",
    endDate: "2023-09-30",
  },
  {
    id: 16,
    categories: "konser",
    cities: "Kocaeli",
    name: "Redd Konseri",
    title: "Rock Gecesi",
    livingRoom: "Hayal Kahvesi Kocaeli",
    coordinate: [40.75724456740521, 29.979338511601522],
    explanation:
      "'Kalpsiz Romantik', 'Beni Sevdi Benden Çok' ve 'Tutmuyor Frenler' şarkılarıyla tanınan Rock müziğin başarılı gruplarından Redd dinleyicisiyle buluşuyor. ",
    prices: {
      price1: 220,
      price2: 300,
      price3: 380,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser16.jpg",
    startDate: "2023-12-15",
    endDate: "2023-12-30",
  },
  {
    id: 17,
    categories: "konser",
    cities: "Eskişehir",
    name: "Kalben Konseri",
    title: "Rock gecesi",
    livingRoom: "IF Performance Hall Eskişehir",
    coordinate: [39.784511119969345, 30.499809867376936],
    explanation:
      "2022’nin başında Türkiye’nin ilk kendi romanı olan albümünü yayınlayan ve bugüne dek 5 albüme, sayısız tekli ve düete imza atan üretken ve özgün müzisyen Kalben dinleyicileri ile buluşuyor. Sen de bu eşsiz gecede yer almak istiyorsan, bu fırsatı kaçırma!",
    prices: {
      price1: 320,
      price2: 400,
      price3: 480,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser17.jpg",
    startDate: "2023-10-05",
    endDate: "2023-10-20",
  },
  {
    id: 18,
    categories: "konser",
    cities: "Eskişehir",
    name: "Köfn Konseri",
    title: "Pop Şöleni",
    livingRoom: "IF Performance Hall Eskişehir",
    coordinate: [39.784511119969345, 30.499809867376936],
    explanation:
      "KÖFN grubu gitarist, vokalist, şarkı yazarı Salman Tin ile prodüktör ve aranjör Bilge Kağan Etil’den oluşuyor. Elektro-pop ve dünya müziğinden beslenerek zamana uygun Türk pop müziği üretmek için çalıştıklarını söyleyen ikili, sahnelerinde dikkat çeken işlere imza atıyor, bileti alın ve bu eşsiz geceyi kaçırmayın ",
    prices: {
      price1: 260,
      price2: 300,
      price3: 380,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser18.jpg",
    startDate: "2023-11-05",
    endDate: "2023-11-20",
  },
  {
    id: 19,
    categories: "konser",
    cities: "İstanbul",
    name: "Emir Can İğrek Konseri",
    title: "Pop şöleni",
    livingRoom: "Blind İstanbul",
    coordinate: [41.02981440631721, 28.97412956743722],
    explanation:
      "‘Nalan’, ‘Dargın’, ‘Beyaz Skandalım’ ve ‘Kor’ gibi şarkıların mimarı Emir Can İğrek, unutulmaz bir konsere imza atmaya geliyor. Sen de Emir Can İğrek konserinde unutulmaz bir gece yaşamak istiyorsan, seni de aramızda görmeyi çok isteriz!",
    prices: {
      price1: 450,
      price2: 540,
      price3: 600,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser19.jpg",
    startDate: "2023-09-30",
    endDate: "2023-10-15",
  },
  {
    id: 20,
    categories: "konser",
    cities: "Eskişehir",
    name: "Dedublüman Konseri",
    title: "Rock Gecesi",
    livingRoom: "IF Performance Hall Eskişehir",
    coordinate: [39.784511119969345, 30.499809867376936],
    explanation:
      "'Gamzedeyim Deva Bulmam', 'Ah Bir Ataş Ver', 'Fikrimin İnce Gülü', 'Çözemezsin', 'Sakladığın Bir Şeyler Var',  'Belki' ve 'En Dibine Kadar' gibi şarkılara yaptıkları farklı coverlar ile son döneme damga vuran Dedublüman, dinleyicileriyle buluşuyor. Sen de bu güzel gecede Dedublüman ile eğlenmek istiyorsan, biletini hemen al!",
    prices: {
      price1: 420,
      price2: 500,
      price3: 580,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser20.jpg",
    startDate: "2023-10-20",
    endDate: "2023-11-05",
  },
  {
    id: 21,
    categories: "konser",
    cities: "Ankara",
    name: "Emre Aydın Konseri",
    title: "Anadolu Rock Rüzgarları",
    livingRoom: "Ankara Milyon Performance Hall",
    coordinate: [39.927828548100074, 32.826741409712696],
    explanation:
      "Emre Aydın, Anadolu rock müziğinin en güzel şarkılarıyla Mardin Kalesi'nde unutulmaz bir konser veriyor.",
    prices: {
      price1: 220,
      price2: 300,
      price3: 380,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser21.jpg",
    startDate: "2023-11-15",
    endDate: "2023-11-30",
  },
  {
    id: 22,
    categories: "konser",
    cities: "Samsun",
    name: "Yaşlı Amca Konseri",
    title: "Yeni Albüm Lansmanı",
    livingRoom: "Samsun Amfi Tiyatro",
    coordinate: [41.27515446209063, 36.36410619333816],
    explanation:
      "Yaşlı Amca, yeni albümünü Zonguldak Stadyumu'nda hayranlarına tanıtacak.",
    prices: {
      price1: 320,
      price2: 400,
      price3: 480,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser22.jpg",
    startDate: "2023-09-05",
    endDate: "2023-09-20",
  },
  {
    id: 23,
    categories: "konser",
    cities: "İzmir",
    name: "Skapova Konseri",
    title: "Rap Gecesi",
    livingRoom: "İzmir Arena",
    coordinate: [38.46571467946291, 27.14522013847932],
    explanation:
      "'Ben Senden Vazgeçtim', 'Sen Bana Aitsin', 'Neden Bu Kadar Güzelsin' ve 'Ben Hala Vazgeçmedim' isimli şarkıları ile popülerleşen Skapova, dinleyicileriyle buluşmaya hazırlanıyor.",
    prices: {
      price1: 310,
      price2: 400,
      price3: 490,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser23.jpg",
    startDate: "2023-12-30",
    endDate: "2023-01-15",
  },
  {
    id: 24,
    categories: "konser",
    cities: "İstanbul",
    name: "Kubilay Karça Konseri",
    title: "Rap Gecesi",
    livingRoom: "Milyon Performance Hall İstanbul ",
    coordinate: [40.994142326947625, 29.110616365586825],
    explanation:
      "'Seni Kırmışlar', 'Celladına Aşık' gibi şarkılarıyla milyonlarca kez dinlenmeye ulaşan Türk müzisyen; söz yazarı ve besteci Kubilay Karça, muhteşem sahne performansıyla sevenleriyle buluşmaya devam ediyor.",
    prices: {
      price1: 320,
      price2: 400,
      price3: 480,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser24.jpg",
    startDate: "2023-09-25",
    endDate: "2023-10-10",
  },
  {
    id: 25,
    categories: "konser",
    cities: "Bursa",
    name: "Ati242 Konseri",
    title: "Efsane Geri Dönüş",
    livingRoom: " Hayal Kahvesi Bursa ",
    coordinate: [40.22881291249381, 28.91465090972719],
    explanation:
      "Ati242, efsane geri dönüş konseriyle Sinop Limanı'nda müzikseverlere unutulmaz anlar yaşatacak.",
    prices: {
      price1: 230,
      price2: 320,
      price3: 400,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser25.jpg",
    startDate: "2023-10-15",
    endDate: "2023-10-30",
  },
  {
    id: 26,
    categories: "konser",
    cities: "Atakent",
    name: "Deniz Tekin Konseri",
    title: "Akustik Şölen",
    livingRoom: "Hayal Kahvesi Atakent",
    coordinate: [41.05293223119765, 28.79118510976744],
    explanation:
      "Deniz Tekin, akustik performansıyla Giresun Ormanı'nda hayranlarına unutulmaz bir gece yaşatacak.",
    prices: {
      price1: 340,
      price2: 420,
      price3: 510,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser26.jpg",
    startDate: "2023-11-30",
    endDate: "2023-12-15",
  },
  {
    id: 27,
    categories: "konser",
    cities: "Izmir",
    name: "Yüksek Sadakat Konseri",
    title: "Rock Rüzgarları",
    livingRoom: "Izmir Fuar Alanı",
    coordinate: [38.465681077577, 27.14532742683459],
    explanation:
      "“Belki Üstümüzden Bir Kuş Geçer”, “Aşk Durdukça”, “Döneceksin Diye Söz Ver”, “Kafile”, “Ben Seni Arayamam”, “Haydi Gel İçelim” gibi şarkılarıyla gönüllere taht kuran Yüksek Sadakat, şehrine geliyor! Sen de bu eşsiz geceyi kaçırma!",
    prices: {
      price1: 420,
      price2: 500,
      price3: 580,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser27.jpg",
    startDate: "2023-09-10",
    endDate: "2023-09-25",
  },
  {
    id: 28,
    categories: "konser",
    cities: "Antalya",
    name: "Zakkum Konseri",
    title: "En İyi Şarkılar",
    livingRoom: "Sponge Pub Lara Antalya",
    coordinate: [36.85744567729329, 30.73846175005112],
    explanation:
      "Grup Zakkum, sevilen şarkılarını hayranlarıyla birlikte seslendiriyor. 'Anason' ve 'Ben Ne Yangınlar Gördüm' şarkılarıyla gönüllere kazınan grup, dinleyicisine keyif dolu bir gece yaşatmayı vaadediyor. ",
    prices: {
      price1: 340,
      price2: 420,
      price3: 500,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser28.jpg",
    startDate: "2023-11-20",
    endDate: "2023-12-05",
  },
  {
    id: 29,
    categories: "konser",
    cities: "Ankara",
    name: "Feridun Düzağaç Konseri",
    title: "Rock Gecesi",
    livingRoom: "Ankara Açıkhava Tiyatrosu",
    coordinate: [39.8761513340568, 32.72761252800871],
    explanation:
      "Feridun Düzağaç, rock gecesi için Kars Sahili'nde hayranlarıyla buluşuyor.",
    prices: {
      price1: 220,
      price2: 300,
      price3: 380,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser29.jpg",
    startDate: "2023-12-20",
    endDate: "2023-01-05",
  },
  {
    id: 30,
    categories: "konser",
    cities: "İstanbul",
    name: "Velet Konseri",
    title: "Rap Gecesi",
    livingRoom: "Hayal Kahvesi Atakent",
    coordinate: [41.05293223119765, 28.79118510976744],
    explanation:
      "Velet, rap müziğin en güçlü şarkılarıyla Çankırı Stadyumu'nda unutulmaz bir konserle müzikseverlere enerji dolu anlar yaşatacak.",
    prices: {
      price1: 320,
      price2: 400,
      price3: 480,
    },
    img_url: "https://techcareer-api2.vercel.app/konser-images/konser30.jpg",
    startDate: "2023-09-20",
    endDate: "2023-10-05",
  },
];

router.get("/", (req, res) => {
  res.json(konser);
});

router.post("/", (req, res) => {
  const yeniKonser = req.body;
  const yeniID = Math.max(...konser.map((item) => item.id)) + 1;
  yeniKonser.id = yeniID;
  konser.push(yeniKonser);
  res.status(201).json(yeniKonser);
});

router.get("/:konserId", (req, res) => {
  const konserId = parseInt(req.params.konserId);
  const hedefKonser = konser.find((konser) => konser.id === konserId);

  if (hedefKonser) {
    const konserWithFullResimPath = {
      ...hedefKonser,
      resim: path.join(__dirname, `public/${hedefKonser.resim}`),
    };
    res.json(konserWithFullResimPath);
  } else {
    res.status(404).json({ hata: "Konser bulunamadı" });
  }
});

module.exports = router;
