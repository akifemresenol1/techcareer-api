// app.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(express.json());

// CORS politikalarını yapılandır
const corsOptions = {
  origin: "http://127.0.0.1:5500", // Erişime izin verilen etki alanı (istemci)
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // İzin verilen HTTP metodları
};

app.use(cors(corsOptions));

app.use(express.static("public"));

// Endpoint dosyaları dahil edildi
const filmlerRouter = require("./sayfalar/filmler");
const tiyatroRouter = require("./sayfalar/tiyatro");
const aileRouter = require("./sayfalar/aile");
const sporRouter = require("./sayfalar/spor");

// Endpoint yolları belirtildi
app.use("/api/filmler", filmlerRouter);
app.use("/api/tiyatro", tiyatroRouter);
app.use("/api/aile", aileRouter);
app.use("/api/spor", sporRouter);

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
