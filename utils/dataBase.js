const Sequelize = require("sequelize");
const {
  dataBase: { DB_NAME, USER_NAME, PASSWORD, HOST, DIALECT },
} = require("../config");

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});

module.exports = sequelize;
