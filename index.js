// app.js
const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

// CORS başlıklarını ekleyin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  // Diğer CORS başlıklarını da ayarlayabilirsiniz.
  next();
});

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
