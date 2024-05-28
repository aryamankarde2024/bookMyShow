"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("option_master", [
      {
        id: "1",
        selectId: "1",
        name: "Booked",
      },
      {
        id: "2",
        selectId: "1",
        name: "Cancelled",
      },
      {
        id: "3",
        selectId: "2",
        name: "Pending",
      },
      {
        id: "4",
        selectId: "2",
        name: "Paid",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
