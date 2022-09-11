const { Model, DataTypes } = require("sequelize");

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  //associaçao
  static associate(models) {
    this.belongsTo(models.Auhtor, { foreignKey: "author_id", as: "title" });
  }
}
module.exports = Book;
