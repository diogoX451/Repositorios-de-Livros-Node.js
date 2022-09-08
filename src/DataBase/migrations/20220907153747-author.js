module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("author", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "books", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
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
