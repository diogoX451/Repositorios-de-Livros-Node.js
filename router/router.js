const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());

module.exports = app
  .route("/livros")
  .get((req, res) => {})
  .post((req, res) => {
    res.json(req.body);
  })
  .put((req, res) => {
    res.json(req.body);
  });
