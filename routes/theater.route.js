const express = require("express");
const router = express.Router();

const {
  insertTheater,
  modifyTheater,
  removeTheater,
  fetchAllTheater,
  fetchTheaterDetails,
} = require("../controllers/theater.controller");

router.post("/", insertTheater);
router.put("/id", modifyTheater);
router.delete("/id", removeTheater);

router.get("/", fetchAllTheater);
router.get("/:theaterId", fetchTheaterDetails);

module.exports = router;
