const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connection = require("./connection/db");

// connection()

/*

const start = async() =>{
try{

await connection()
app.listen(port,console.log("Server is listening on port"));
}
catch(err){
console.log(err);
}

}
start()
*/
app.use("/api/v1/tasks", tasks);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.get("/exit", (req, res) => {
  res.send("EXIT");
  process.exit(1);
});
PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});

// const express = require("express");
// const app = express();
