const express = require("express");
const router = express.Router();

const {
  insertUser,
  modifyUser,
  deleteAccount,
} = require("../controllers/user.controller");

router.post("/", insertUser);
router.put("/", modifyUser);
router.delete("/:id", deleteAccount);

module.exports = router;
