const express = require("express");
const router = require("express").Router();
const BookController = require("../controller/BookController");

router.post("/cadBook", BookController.postBook);
router.get("/repo-book", BookController.index);
module.exports = router;
