const Book = require("../models/Book");
const Author = require("../models/Author");
module.exports = {
  async index(req, res) {
    const { author_id } = req.params;
    const books = await Book.findByPk(author_id, {
      include: { association: "authors" },
    });
    return res.json(books);
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
