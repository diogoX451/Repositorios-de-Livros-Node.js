require("dotenv").config(); // this is important
module.exports = {
  dialect: "postgres",
  // dialectOptions: {
  //   ssl: {
  //     require: false,
  //     rejectUnauthorized: true,
  //   },
  // },
  host: "apiBook",
  username: "admin",
  port: 5432,
  database: "level-acess",
  password: "admin123",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  // dialect: "postgres",
  // host: "localhost",
  // username: "postgres",
  // password: "1234",
  // database: "postgres",
  // port: "5433",
  // define: {
  //   timestamps: true,
  //   underscored: true,
  // },
};
