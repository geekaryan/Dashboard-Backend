const Sectors = require("./../controllers/sectorController");

const express = require("express");
const router = express.Router();

router.route("/").get(Sectors.getSectors).post(Sectors.createSector);

module.exports = router;
