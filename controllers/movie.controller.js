const { generalResponse } = require("../helpers/response.helper");
const {
  createMovie,
  updateMovie,
  getAllMovies,
  getMovies,
} = require("../repositories/movie.repository");

async function insertMovie(req, res) {
  try {
    const { title, description, duration, releaseDate } = req.body;
    const newMovie = await createMovie({
      title,
      description,
      duration,
      releaseDate,
    });
    return generalResponse(res, newMovie, "Added new movie successfully !");
  } catch (error) {
    console.error("Error creating movie:", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while creating movie !",
      "error",
      true
    );
  }
}

async function modifyMovie(req, res) {
  try {
    const { title, description, duration, releaseDate } = req.body;
    const user = await updateMovie({
      id: req.params.id,
      title,
      description,
      duration,
      releaseDate,
    });
    return generalResponse(res, user, "Movie updated successfully !");
  } catch (error) {
    console.error("Error updating movie:", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while updating movie !",
      "error",
      true
    );
  }
}

async function fetchMovies(_, res) {
  try {
    const movies = await getAllMovies();
    return generalResponse(res, movies, "List of movies !");
  } catch (error) {
    console.error("Error fetching movies :", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching movies !",
      "error",
      true
    );
  }
}

async function fetchUpcomingMovies(_, res) {
  try {
    const movies = await getMovies();
    return generalResponse(res, movies, "List of movies !");
  } catch (error) {
    console.error("Error fetching movies :", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching movies !",
      "error",
      true
    );
  }
}

module.exports = {
  insertMovie,
  modifyMovie,
  fetchMovies,
  fetchUpcomingMovies,
};
