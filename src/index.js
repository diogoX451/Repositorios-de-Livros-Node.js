const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//redenrizar arquivo html
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
const livros = [
  {
    id: 1,
    name: "O Senhor dos Anéis",
  },
];
app.get("/livros", (req, res) => {
  res.render("index");
  res.json(livros);
});
app.post("/adicionarLivros", (req, res) => {
  res.render("list", { livros: livros });
  livros.push(req.body);
  res.json(livros);
});
app.delete("/livro/:id", (req, res) => {
  livros.splice(req.params.id);
  res.json(livros);
});
app.listen(3000);
