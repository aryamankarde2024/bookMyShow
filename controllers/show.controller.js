const { generalResponse } = require("../helpers/response.helper");
const { fetchSeats } = require("../repositories/show.repository");

async function getSeats(req, res) {
  try {
    const seats = await fetchSeats(req.params);
    return generalResponse(res, seats, "");
  } catch (error) {
    console.error("Error fetching seats:", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching seats !",
      "error",
      true
    );
  }
}

module.exports = {
  getSeats,
};
