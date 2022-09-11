const { Model, DataTypes } = require("sequelize");

class Author extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  //associaçao
  static associate(models) {
    this.hasMany(models.Book, { foreignKey: "author_id", as: "title" });
  }
}
module.exports = Author;
