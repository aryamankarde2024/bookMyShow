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
      {
        id: "5",
        selectId: "3",
        name: "Theater Added",
      },
      {
        id: "6",
        selectId: "3",
        name: "Theater Removed",
      },
      {
        id: "7",
        selectId: "3",
        name: "Movie Added",
      },
      {
        id: "8",
        selectId: "3",
        name: "Movie Removed",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
