"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("books", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true, //chave primaria
        autoIncrement: true, //auto incremento
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        varchar: 255,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable("books");
  },
};
