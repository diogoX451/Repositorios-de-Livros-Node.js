module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("auhtors", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "books", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      name: {
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
    queryInterface.dropTable("auhtors");
  },
};
