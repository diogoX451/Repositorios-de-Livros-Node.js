const Book = require("../models/Book");
module.exports = {
  async index(req, res) {
    const books = await Book.findAll();
    return res.json(books);
  },

  async postBook(req, res) {
    const title = req.body;
    const book = await Book.create(title);
    return res.json(book);
  },
};
