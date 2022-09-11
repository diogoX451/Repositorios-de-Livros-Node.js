const express = require("express");
const router = require("express").Router();
const BookController = require("../controller/BookController");
const AuthorController = require("../controller/AuthorController");

router.post("/cadBook/:author_id/list", BookController.postBook);
router.get("/repo-book/:author_id/list", BookController.index);
//encadeamento de rotas
router.post("/cadAuthor", AuthorController.postAuthor);
router.get("/cad-author/:author_id/cad-author", AuthorController.index);
router.delete("/cad-author/:id/cad-author", AuthorController.deleteAuthor);
module.exports = router;
