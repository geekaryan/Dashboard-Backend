const express = require("express");
const SectorRouter = require("./routes/sectorRoute");

const app = express();
app.use(express.json());

app.use("/api/sector", SectorRouter);

module.exports = app;
