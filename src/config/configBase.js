require("dotenv").config();
module.exports = {
  dialect: "postgres",
  host: process.env.HOST,
  username: process.env.USERNAME,
  port: process.env.DB_PORT,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
  },
};
