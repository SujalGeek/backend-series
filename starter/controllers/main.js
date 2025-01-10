const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  try {
    if (!req.body) {
      throw new CustomAPIError("Invalid request", 400);
    }
    const { username, password } = req.body;
    if (!username || !password) {
      throw new CustomAPIError("Please provide the username and password", 400);
    }
    console.log(username, password);
    const id = new Date().getDate();
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.json({
      message: "User created succesfully",
      token,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const dashboard = async (req, res) => {
  const luckynumber = Math.floor(Math.random() + 100);
  res.status(200).send({
    message: "Hello",
    secret: `Here is your authorized data ${luckynumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
