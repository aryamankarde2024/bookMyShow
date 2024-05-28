"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("select_master", [
      {
        id: "1",
        name: "booking_status",
        label: "Booking Status",
      },
      {
        id: "2",
        name: "payment_status",
        label: "Payment Status",
      },
      {
        id: "3",
        name: "log_types",
        label: "Log types",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("select_master", null, {});
  },
};
