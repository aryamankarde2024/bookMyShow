"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("shows", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      movieId: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "movies",
        },
      },
      screenId: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "screens",
        },
      },
      startsAt: {
        type: Sequelize.DATE,
      },
      premium: {
        type: Sequelize.INTEGER,
      },
      diamond: {
        type: Sequelize.INTEGER,
      },
      gold: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("shows");
  },
};
