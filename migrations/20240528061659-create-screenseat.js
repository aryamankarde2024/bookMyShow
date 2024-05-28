"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("screen_seats", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      screenId: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "screens",
        },
      },
      seatId: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "seats",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("screen_seats");
  },
};
