const Task = require("../models/task.js");
const { StatusCodes } = require("http-status-codes");
const getAlltasks = async (req, res) => {
  try {
    // const
    const tasks = await Task.find({});
    return res.status(StatusCodes.OK).json({ tasks });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
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

const gettask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({
      _id: taskID,
    });
    if (!task) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Task not found",
      });
    }
    return res.status(StatusCodes.OK).json({ task });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message,
    });
  }
};

const updatetask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate(
      {
        _id: taskId,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    return res.status(StatusCodes.OK).json({
      message: "Task updated successfully",
    });
  } catch (error) {}
};

const deletetask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({
      _id: taskID,
    });

    if (!task) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "No Task Found",
      });
    }
    return res.status(StatusCodes.OK).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message,
    });
  }
};
module.exports = {
  getAlltasks,
  createtask,
  gettask,
  updatetask,
  deletetask,
};
