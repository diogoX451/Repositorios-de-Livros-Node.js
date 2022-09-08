const Auhtor = require("../models/Author");
const Book = require("../models/Book");
module.exports = {
  async index(req, res) {
    const { title_id } = req.params;
    const authors = await Auhtor.findByPk(title_id, {
      include: { association: "title" },
    });
    return res.json(authors);
  },
  //remover um author
  async deleteAuthor(req, res) {
    const { id } = req.params;
    const author = await Auhtor.findByPk(id);
    if (!author) {
      return res.status(400).json({ error: "Author not found" });
    }
    await author.destroy();
    return res.json(author);
  },
  async postAuthor(req, res) {
    const { title_id } = req.params;
    const { name } = req.body;
    const book = await Book.findByPk(title_id);
    if (!book) {
      return res.status(400).json({ error: "Book not found" });
    }
    const author = await Auhtor.create({
      name,
      title_id,
    });
    return res.json(author);
  },
};
