const CustomAPIError = require("../errors/custom-error");

const authenticationMiddleware = async (req, res, next) => {
  console.log(req.headers.authorization);
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("No token provided", 401);
  }
  // console.log(req.headers);
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    console.log(decoded.username);
    next();
  } catch (error) {
    throw new CustomAPIError("Not authorized to access the data", 401);
  }
};

module.exports = authenticationMiddleware;
