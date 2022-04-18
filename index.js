const express = require("express");
const path = require("path");
const serverRun = require("./helper/serverRun");
const todoRoutes = require("./routes/todo");

const app = express();
const config = require("./config");
const { PORT } = config;

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/todo", todoRoutes);

app.use((req, res, next) => {
  res.sendFile("./index.js");
});

app.listen(PORT || 5000, () => {
  console.log(serverRun(PORT));
});
