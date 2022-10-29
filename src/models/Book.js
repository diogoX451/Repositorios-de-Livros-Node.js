const { Model, DataTypes } = require("sequelize");
const Author = require("./Author");

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        author_id: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
  //associaçao
  static associate(models) {
    this.hasOne(models.Author, {
      as: "author",
      sourceKey: "author_id",
      foreignKey: "id",
    });
  }
}
module.exports = Book;
