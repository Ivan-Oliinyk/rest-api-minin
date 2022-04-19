require("dotenv").config();
const dataBase = require("./DB/");

module.exports = {
  PORT: process.env.PORT,
  dataBase,
};
