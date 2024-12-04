const getAlltasks = (req, res) => {
  res.send("Getting All Items");
};

const createtask = (req, res) => {
  res.send("created a task");
};

const gettask = (req, res) => {
  res.send("getting a task");
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
