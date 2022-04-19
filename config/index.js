require("dotenv").config();
const dataBase = require("./DB/");

module.exports = {
  PORT: 5000,
  dataBase,
};
