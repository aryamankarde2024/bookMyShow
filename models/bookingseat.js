"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BookingSeat extends Model {
    static associate(models) {}
  }
  BookingSeat.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      bookingId: {
        type: DataTypes.INTEGER,
      },
      seatId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "BookingSeat",
      tableName: "booking_seats",
      timestamps: false,
    }
  );
  return BookingSeat;
};
