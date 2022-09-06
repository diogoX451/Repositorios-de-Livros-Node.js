const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router/router");
require("./DataBase/db");
const port = process.env.PORT || 3000;
//renderizar arquivo html
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
app.use(express.json());
// rota para adicionar livros

// const livros = [
//   {
//     book: "O Senhor dos Anéis",
//     author: "J.R.R. Tolkien",
//   },
// ];
// app.get("/livros", (req, res) => {
//   res.render("index");
//   res.json(livros);
// });
// app.post("/adicionarLivros", (req, res) => {
//   res.render("list", { livros: livros });
//   livros.push(req.body);
//   res.json(livros);
// });
// app.delete("/livro/:id", (req, res) => {
//   livros.splice(req.params.id);
//   res.json(livros);
// });

app.listen(port);
