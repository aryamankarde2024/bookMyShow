const { Op } = require("sequelize");
const db = require("../models/index");
const { Movie, Screen, Show } = db;

async function createMovie(payload) {
  try {
    const newMovie = await Movie.create(payload);
    return newMovie;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

async function updateMovie(payload) {
  try {
    const updatedMovie = await Movie.update(payload, {
      where: {
        id: payload.id,
      },
    });
    return updatedMovie;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

async function getAllMovies() {
  try {
    await Movie.findAll();
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
}

async function getMovies() {
  try {
    await Movie.findAll({
      include: [
        {
          model: Show,
          where: {
            startsAt: {
              [Op.gt]: new Date(),
            },
          },
          include: [
            {
              model: Screen,
              include: [Theater],
            },
          ],
        },
      ],
    });
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
}

module.exports = {
  createMovie,
  updateMovie,
  getAllMovies,
  getMovies,
};
