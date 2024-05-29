const express = require("express");
const router = express.Router();

const { getSeats } = require("../controllers/show.controller");

router.get("/:showId/:screenId", getSeats);

module.exports = router;
