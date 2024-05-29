const db = require("../models/index");
const { ScreenSeat, BookingSeat, sequelize } = db;

async function fetchSeats({ showId, screenId }) {
  try {
    const seats = await ScreenSeat.findAll({
      where: {
        screenId,
      },
      include: [
        {
          model: BookingSeat,
          where: {
            bookingId: sequelize.literal(
              `(SELECT id FROM bookings WHERE showId = ${showId})`
            ),
          },
        },
      ],
    });
    return seats;
  } catch (error) {
    console.error("Error fetching seats:", error);
    throw error;
  }
}

module.exports = {
  fetchSeats,
};
