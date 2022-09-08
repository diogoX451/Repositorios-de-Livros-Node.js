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
    this.hasMany(models.Auhtor, { foreignKey: "title_id", as: "title" });
  }
}
module.exports = Book;
