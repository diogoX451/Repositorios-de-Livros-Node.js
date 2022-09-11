const Author = require("../models/Author");
const Book = require("../models/Book");
module.exports = {
  async index(req, res) {
    const { author_id } = req.params;
    const authors = await Author.findByPk(author_id, {
      include: { association: "title" },
    });
    return res.json(authors);
  },
  //remover um author
  async deleteAuthor(req, res) {
    const { id } = req.params;
    const author = await Author.findByPk(id);
    if (!author) {
      return res.status(400).json({ error: "Author not found" });
    }
    await author.destroy();
    return res.json(author);
  },
  async postAuthor(req, res) {
    const name = req.body;
    const author = await Author.create(name);
    return res.json(author);
  },
};
