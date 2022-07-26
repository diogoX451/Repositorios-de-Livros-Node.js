const express = require("express");
const router = require("express").Router();
const BookController = require("../controller/BookController");
const AuthorController = require("../controller/AuthorController");

router.post("/cadBook/:author_id/list", BookController.postBook);
router.get("/repo-book/:id", BookController.index);
router.get("/repo-book", BookController.index);
router.delete("/repo-book/:id", BookController.deletBook);
router.put("/author/:author_id", AuthorController.updateAuhtor);
//encadeamento de rotas
router.post("/cadAuthor", AuthorController.postAuthor);
router.get("/cad-author/:author_id", AuthorController.index);
router.delete("/cad-author/:id/cad-author", AuthorController.deleteAuthor);

module.exports = router;
