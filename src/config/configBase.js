require("dotenv").config(); // this is important!
module.exports = {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  host: "ec2-35-168-122-84.compute-1.amazonaws.com",
  username: "divyboeqzuebgy",
  port: 5432,
  database: "d6ba737qa894tc",
  password: "e4e315af75873f431e0b6f230567ffdea1409d28ca078b79ac452e1520967e31",
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
