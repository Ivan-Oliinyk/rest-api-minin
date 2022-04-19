const express = require("express");
const path = require("path");
const sequelize = require("./utils/dataBase");
const todoRoutes = require("./routes/todo");
const serverRun = require("./helper/serverRun");
const app = express();
const config = require("./config");
const { PORT } = config;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/api/todo", todoRoutes);

app.use((req, res, next) => {
  res.sendFile("./index.js");
});

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT || 5000, () => {
      console.log(serverRun(PORT));
    });
  } catch (e) {
    console.log(e);
  }
}

start();
