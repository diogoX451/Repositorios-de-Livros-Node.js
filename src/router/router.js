const express = require("express");
const router = require("express").Router();
const BookController = require("../controller/BookController");
const AuthorController = require("../controller/AuthorController");

router.post("/cadBook", BookController.postBook);
router.get("/repo-book", BookController.index);
//encadeamento de rotas
router.post("/repo-book/:title_id/cad-author", AuthorController.postAuthor);
router.get("/cad-author/:title_id/cad-author", AuthorController.index);
router.delete("/cad-author/:id/cad-author", AuthorController.deleteAuthor);
module.exports = router;
