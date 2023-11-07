const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.use(express.static("public"));

// Endpoint dosyaları dahil edildi
const biletlerRouter = require("./sayfalar/biletler");
const filmlerRouter = require("./sayfalar/filmler");
const tiyatroRouter = require("./sayfalar/tiyatro");
const aileRouter = require("./sayfalar/aile");
const sporRouter = require("./sayfalar/spor");

// Endpoint yolları belirtildi
app.use("/api/biletler", biletlerRouter);
app.use("/api/filmler", filmlerRouter);
app.use("/api/tiyatro", tiyatroRouter);
app.use("/api/aile", aileRouter);
app.use("/api/spor", sporRouter);

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
