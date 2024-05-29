const db = require("../models/index");
const { Theater, Show, Screen, Movie } = db;

async function createTheater(payload) {
  try {
    const newTheater = await Theater.create(payload);
    return newTheater;
  } catch (error) {
    console.error("Error creating theater:", error);
    throw error;
  }
}

async function updateTheater(payload) {
  try {
    const updatedTheater = await Theater.update(payload, {
      where: {
        id: payload.id,
      },
    });
    return updatedTheater;
  } catch (error) {
    console.error("Error updating theater:", error);
    throw error;
  }
}

async function deleteTheater(id) {
  try {
    const deletedTheater = await Theater.destroy({
      where: {
        id,
      },
    });
    return deletedTheater;
  } catch (error) {
    console.error("Error deleting theater:", error);
    throw error;
  }
}

async function getAllTheater() {
  try {
    const theaters = await Theater.findAll();
    return theaters;
  } catch (error) {
    console.error("Error fetching theaters:", error);
    throw error;
  }
}

async function getTheaterDetails(id) {
  try {
    const theaterDetails = await Theater.findByPk(id, {
      include: [
        {
          model: Screen,
          include: [
            {
              model: Show,
              where: {
                startsAt: {
                  [Op.gte]: new Date(), // Only include upcoming shows
                },
              },
              include: [
                {
                  model: Movie,
                  attributes: ["title", "duration", "description"],
                },
              ],
            },
          ],
        },
      ],
    });

    return theaterDetails;
  } catch (error) {
    console.error("Error fetching theater details:", error);
    throw error;
  }
}

module.exports = {
  createTheater,
  updateTheater,
  deleteTheater,
  getAllTheater,
  getTheaterDetails,
};
