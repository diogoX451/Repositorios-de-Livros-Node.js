"use strict";
//fazer a relação entre livros e autores
//nesta migration
// User -- Livro -- Autor
// 1 -- n -- 1

//migration entre author e books
// Author -- Livro
// 1 -- n
// Livro -- Autor
// 1 -- 1

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("books", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true, //chave primaria
        autoIncrement: true, //auto incremento
        allowNull: false,
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
