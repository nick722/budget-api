const express = require("express");
const json = require("./transactions");
const app = express();

app.get("/transactions", (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send(json);
});

app.listen(3001, () => {
  console.log("The server is running on the port 3001");
});
