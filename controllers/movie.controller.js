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

// async function fetchAllAvailableMovies(req, res) {
//   try {
//     const result = await Movie.findAll({
//       include: [
//         {
//           model: Show,
//           where: {
//             startTime: {
//               [Op.gt]: new Date(),
//             },
//           },
//           include: [
//             {
//               model: Screen,
//               attributes: {
//                 include: [
//                   [
//                     sequelize.literal(`(
//                                 SELECT (SELECT COUNT(seatId) FROM screenxseats WHERE screenId = \`Shows->Screen\`.\`id\`) - COUNT(bookedSeats.id)
//                                   FROM
//                                     bookings
//                                       INNER JOIN
//                                     bookingxseats AS bookedSeats ON bookings.showId = \`Shows\`.\`id\` AND bookings.id = bookedSeats.bookingId
//                                       INNER JOIN
//                                     screenxseats AS screenSeats
//                                       ON screenSeats.screenId = \`Shows->Screen\`.\`id\` AND bookedSeats.seatId = screenSeats.seatId
//                             )`),
//                     "availableSeats",
//                   ],
//                 ],
//               },
//               include: [Theater],
//             },
//           ],
//           attributes: {
//             include: [
//               [
//                 sequelize.literal(`(
//                   SELECT ADDTIME(Shows.startTime, SEC_TO_TIME(Movie.duration * 60))
//                 )`),
//                 "endTime",
//               ],
//             ],
//           },
//         },
//       ],
//     });
//     res.json(result);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// }

module.exports = {
  insertMovie,
  modifyMovie,
  fetchMovies,
  fetchUpcomingMovies,
};
