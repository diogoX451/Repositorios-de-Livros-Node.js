module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("author", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        varchar: 255,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable("author");
  },
};
