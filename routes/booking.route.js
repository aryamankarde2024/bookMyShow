const express = require("express");
const router = express.Router();

const { bookSeatsController } = require("../controllers/booking.controller");

router.post("/", bookSeatsController);

module.exports = router;
