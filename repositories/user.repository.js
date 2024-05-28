const db = require("../models/index");
const { User } = db;

async function createUser(userPayload) {
  try {
    const newUser = await User.create(userPayload, {
      fields: ["firstName", "lastName", "email"],
    });
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

async function updateUser(userPayload) {
  try {
    const updatedUser = await User.update(userPayload, {
      where: {
        email: userPayload.email,
      },
    });
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

async function deleteUser(id) {
  try {
    const updatedUser = await User.destroy({
      where: {
        id,
      },
    });
    return updatedUser;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
};
