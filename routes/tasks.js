const express = require("express");
const router = express.Router();
const {
  getAlltasks,
  createtask,
  gettask,
  updatetask,
  deletetask,
} = require("../controller/task");

router.route("/").get(getAlltasks).post(createtask);

router.route("/:id").get(gettask).patch(updatetask).delete(deletetask);

module.exports = router;
