const express = require("express");
const router = express.Router();

const {
  insertUser,
  modifyUser,
  deleteAccount,
} = require("../controllers/user.controller");

router.post("/registration", insertUser);
router.put("/user", modifyUser);
router.delete("/user/:id", deleteAccount);

module.exports = router;
