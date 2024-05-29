const { generalResponse } = require("../helpers/response.helper");
const { bookSeats } = require("../repositories/booking.repository");

const bookSeatsController = async (req, res) => {
  try {
    const { userId, showId, seatIds, paymentDetails } = req.body;
    const result = await bookSeats({
      userId,
      showId,
      seatIds,
      paymentDetails,
    });
    return generalResponse(res, result, "Booking successfull !");
  } catch (error) {
    console.error("Error booking seats:", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while booking seats!",
      "error",
      true
    );
  }
};

module.exports = { bookSeatsController };
