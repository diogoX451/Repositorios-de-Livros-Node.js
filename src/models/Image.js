/**
 * ! 1°submit imagem ->http request -> read buffer ->store BLOB
 * ! 2°read from BLOB -> to buffer ->  build the http response
 *
 */

const { Model, DataTypes } = require("sequelize");

class Image extends Model {
  static init(sequelize) {
    super.init(
      {
        image: DataTypes.BLOB,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Book, {
      foreignKey: "image_id",
      as: "Imagem",
      sourceKey: "id",
    });
  }
}

module.exports = Image;
