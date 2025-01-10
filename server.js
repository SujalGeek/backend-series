const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const PORT = 4000;
app.get("/readfile", (req, res) => {
  const filePath = path.join(__dirname, "sample.txt");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading the file.");
    }
    res.send(`<pre>${data}</pre>`);
  });
});

app.get("/", (req, res) => {
  res.send("Done with this process");
});
app.get("/home",(req,res)=>{
  res.send("Home page")
})


app.get("/exit", (req, res) => {
  res.send("Server is stoppped");
  process.exit(1);
});

app.use((req, res) => {
  res.status(404).send("404: Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
