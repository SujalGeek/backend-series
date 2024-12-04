const Task = require("../models/task.js");
const { StatusCodes } = require("http-status-codes");
const getAlltasks = (req, res) => {
  res.send("Getting All Items");
};

const createtask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.status(StatusCodes.OK).json({ task });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error });
  }
};

const gettask = (req, res) => {
  res.json({ id: req.params.id });
};

const updatetask = (req, res) => {
  res.send("updating  task");
};

const deletetask = (req, res) => {
  res.send("delete task");
};
module.exports = {
  getAlltasks,
  createtask,
  gettask,
  updatetask,
  deletetask,
};
