const express = require("express");
const router = express.Router();

const {
  insertMovie,
  modifyMovie,
  fetchMovies,
  fetchUpcomingMovies,
} = require("../controllers/movie.controller");

router.post("/", insertMovie);
router.put("/id", modifyMovie);

router.get("/", fetchMovies);
router.get("/upcoming", fetchUpcomingMovies);

module.exports = router;
