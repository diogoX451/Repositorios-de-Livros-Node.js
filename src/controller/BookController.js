const Book = require("../models/Book");
const Author = require("../models/Author");
module.exports = {
  async index(req, res) {
    const { author_id } = req.params;
    const authors = await Author.findByPk(author_id, {
      include: { association: "author" },
    });
    return res.json(authors);
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
    const { author_id } = req.params;
    const { title } = req.body;
    const author = await Author.findByPk(author_id);
    if (!author) {
      return res.status(400).json({ error: "Author not found" });
    }
    const book = await Book.create({
      title,
      author_id,
    });
    return res.json(book);
  },
};
