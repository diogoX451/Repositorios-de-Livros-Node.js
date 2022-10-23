require("dotenv").config(); // this is important!

module.exports = {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  host: "localhost",
  username: "postgres",
  port: 5432,
  database: "postgres",
  password: "12345",
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
