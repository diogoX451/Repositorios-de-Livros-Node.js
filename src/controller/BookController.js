const Book = require("../models/Book");
const Author = require("../models/Author");
const multer = require("multer");
module.exports = {
  async index(req, res) {
    const { id } = req.params;
    if (!id) {
      const books = await Book.findAll();
      return res.json(books);
    }
    const books = await Book.findByPk(id, {
      include: { association: "author" },
    });
    return res.json(books);
  },

  async deletBook(req, res) {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(400).json({ error: "Book not found" });
    }
    await book.destroy();
    return res.json(book);
  },
  async postBook(req, res) {
    const { title } = req.body;
    const { author_id } = req.params;
    const author = await Author.findOne({ where: { id: author_id } });
    if (!author) {
      return res.status(400).json({ error: "Author not found" });
    }
    const book = await Book.create({
      title,
      author_id,
    });
    return res.json(book, image);
  },
};
