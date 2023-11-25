const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

// const corsOptions = {
//   origin: "http://127.0.0.1:5500", // Erişime izin verilen etki alanı (istemci)
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // İzin verilen HTTP metodları
// };

app.use(cors());

// Endpoint dosyalarını dahil et
const konserRouter = require("./pages/konser");
const tiyatroRouter = require("./pages/tiyatro");
const standUpRouter = require("./pages/standUp");
const sporRouter = require("./pages/spor");

// Endpoint yollarını belirt
app.use("/api/konser", konserRouter);
app.use("/api/tiyatro", tiyatroRouter);
app.use("/api/standUp", standUpRouter);
app.use("/api/spor", sporRouter);

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
