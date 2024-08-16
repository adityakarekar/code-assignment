const express = require("express");
const app = express();
const port = 5000;
const data = require("./data/data.json");

app.get("/api", (req, res) => {
  res.send(data);
});
app.listen(port, () => {
  console.log("Server started at port " + port);
});
