const express = require("express");
const router = express.Router();
const { getServeyData, postServeyData } = require("../controllers/ServeyDataController")


router.route("/").get( getServeyData ).post( postServeyData )

module.exports = router;