const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();

const localstring = "mongodb://localhost:27017";
mongoose
  .connect(process.env.MONGODB_URL || localstring, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB");
  });

module.exports = mongoose;

/* 

const connectionstring = "stringurlofmongoose"
const connectdb = (url) =>{
  return mongoose.connect(connectionstring,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  
  }

module.exports = connectdb()
*/
