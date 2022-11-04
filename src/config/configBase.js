require("dotenv").config(); // this is important
export default {
  host,
};
module.exports = {
  dialect: "postgres",
  // dialectOptions: {
  //   ssl: {
  //     require: false,
  //     rejectUnauthorized: true,
  //   },
  // },
  host: "localhost",
  username: "admin",
  port: 5433,
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
