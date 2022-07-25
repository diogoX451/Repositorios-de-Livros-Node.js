const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router/router");
app.use(bodyParser.json());
app.use(express.json());
const livros = [
  {
    id: 1,
    name: "O Senhor dos Anéis",
  },
];
app.get("/livros", (req, res) => {
  res.json(livros);
});
app.post("/adicionarLivros", (req, res) => {
  livros.push(req.body);
  res.json(livros);
});
app.delete("/livro/:id", (req, res) => {
  livros.splice(req.params.id);
  res.json(livros);
});
app.listen(3000);
