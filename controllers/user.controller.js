const { generalResponse } = require("../helpers/response.helper");
const {
  createUser,
  updateUser,
  deleteUser,
} = require("../repositories/user.repository");

async function insertUser(req, res) {
  try {
    const { firstName, lastName, email } = req.body;
    const newUser = await createUser({
      firstName,
      lastName,
      email,
    });
    return generalResponse(
      res,
      newUser,
      "Inserted New User Successfully!",
      true
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching users!",
      "error",
      true
    );
  }
}

async function modifyUser(req, res) {
  try {
    const { firstName, lastName, email } = req.body;
    const user = await updateUser({
      firstName,
      lastName,
      email,
    });
    return generalResponse(res, user, "Updated User Successfully!", true);
  } catch (error) {
    console.error("Error fetching users:", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching users!",
      "error",
      true
    );
  }
}

async function deleteAccount(req, res) {
  try {
    const user = await deleteUser(req.params.id);
    return generalResponse(res, user, "User Deleted Successfully!", true);
  } catch (error) {
    console.error("Error fetching users:", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching users!",
      "error",
      true
    );
  }
}

module.exports = {
  insertUser,
  modifyUser,
  deleteAccount,
};
