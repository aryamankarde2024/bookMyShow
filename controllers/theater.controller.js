const { generalResponse } = require("../helpers/response.helper");
const {
  createTheater,
  updateTheater,
  deleteTheater,
  getAllTheater,
  getTheaterDetails,
} = require("../repositories/theater.repository");

async function insertTheater(req, res) {
  try {
    const { name, location, address } = req.body;
    const newTheater = await createTheater({
      name,
      location,
      address,
    });
    return generalResponse(
      res,
      newTheater,
      "Added new theater successfully !",
      true
    );
  } catch (error) {
    console.error("Error creating theater:", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while creating theater !",
      "error",
      true
    );
  }
}

async function modifyTheater(req, res) {
  try {
    const { name, location, address } = req.body;
    const updatedTheater = await updateTheater({
      id: req.params.id,
      name,
      location,
      address,
    });
    return generalResponse(
      res,
      updatedTheater,
      "Theater updated successfully !",
      true
    );
  } catch (error) {
    console.error("Error updating theater:", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while updating theater !",
      "error",
      true
    );
  }
}

async function removeTheater(req, res) {
  try {
    const deletedTheater = await deleteTheater(req.params.id);
    return generalResponse(
      res,
      deletedTheater,
      "Theater Deleted Successfully!",
      true
    );
  } catch (error) {
    console.error("Error deleting theater:", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while deleting theater!",
      "error",
      true
    );
  }
}

async function fetchAllTheater(_, res) {
  try {
    const theaters = await getAllTheater();
    return generalResponse(res, theaters, "List of theaters !", true);
  } catch (error) {
    console.error("Error fetching theaters :", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching theaters !",
      "error",
      true
    );
  }
}

async function fetchTheaterDetails(req, res) {
  try {
    const theaterDetails = await getTheaterDetails(req.params.theaterId);
    return generalResponse(res, theaterDetails, "Theater Details !", true);
  } catch (error) {
    console.error("Error fetching theater details :", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching theater details !",
      "error",
      true
    );
  }
}

module.exports = {
  insertTheater,
  modifyTheater,
  removeTheater,
  fetchAllTheater,
  fetchTheaterDetails,
};
