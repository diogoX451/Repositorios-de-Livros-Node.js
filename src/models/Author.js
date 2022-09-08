const { Model, DataTypes } = require("sequelize");

class Auhtor extends Model {
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
    this.belongsTo(models.Book, { foreignKey: "title_id", as: "title" });
  }
}
module.exports = Auhtor;
