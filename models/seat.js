"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    static associate(models) {
      Seat.belongsToMany(models.Screen, {
        through: "screen_seats",
        foreignKey: "seatId",
        otherKey: "screenId",
      });

      Seat.belongsToMany(models.Booking, {
        through: "booking_seats",
        foreignKey: "seatId",
        otherKey: "bookingId",
      });
    }
  }
  Seat.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      seatNumber: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["premium", "diamond", "gold"],
      },
    },
    {
      sequelize,
      modelName: "Seat",
      tableName: "seats",
      timestamps: false,
    }
  );
  return Seat;
};
