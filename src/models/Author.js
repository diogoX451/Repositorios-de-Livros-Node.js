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
}
module.exports = Auhtor;
