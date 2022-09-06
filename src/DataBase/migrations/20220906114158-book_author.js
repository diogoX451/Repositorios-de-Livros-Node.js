module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("book_author", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable("book_author");
  },
};
