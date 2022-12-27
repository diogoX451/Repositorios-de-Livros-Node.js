const Book = require("../models/Book");
const Author = require("../models/Author");
const Image = require("../models/Image");

module.exports = {
  async index(req, res) {
    const img = req.body;
    const title = await Image.create({ img });
    return res.json(img);
  },
};
