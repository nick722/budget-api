const express = require("express");
const app = express();

app.get("/url", (req, res, next) => {
  res.json(["Tofu", "List", "Microphone", "Ginger", "Food"]);
});

app.listen(3001, () => {
  console.log("The server is running on the port 3001");
});
