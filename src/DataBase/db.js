//conectar banco de dados com sequelize
require("dotenv").config();
const Sequelize = require("sequelize");
const dbConfig = require("../config/configBase");
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    dialectOptions: dbConfig.dialectOptions,
    port: dbConfig.port,
    define: dbConfig.define,
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
