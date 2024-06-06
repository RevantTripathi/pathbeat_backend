const express = require("express");
const router = express.Router();
const cardController = require("../controller/cardController");


router.get("/",cardController.getAllData);

module.exports = router;