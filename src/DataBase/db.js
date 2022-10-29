//conectar banco de dados com sequelize
require("dotenv").config();
const Sequelize = require("sequelize");
const consign = require("consign");
const Book = require("../models/Book");
const Author = require("../models/Author");
const dbConfig = require("../config/configBase");
const sequelize = new Sequelize(dbConfig);

consign()
  .include("models")
  .then(Book.init(sequelize))
  .then(Author.init(sequelize))
  .then(Author.associate(sequelize.models))
  .then(Book.associate(sequelize.models));

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
