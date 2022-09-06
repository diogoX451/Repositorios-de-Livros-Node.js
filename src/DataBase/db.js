//conectar banco de dados com sequelize
require("dotenv").config();
const Sequelize = require("sequelize");
const Book = require("../models/Book");

const dbConfig = require("../config/configBase");
const sequelize = new Sequelize(dbConfig);
Book.init(sequelize);
sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
