"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.User, { foreignKey: "userId" });
      Booking.belongsTo(models.Show, { foreignKey: "showId" });
      Booking.belongsTo(models.OptionMaster, { foreignKey: "status" });

      Booking.belongsToMany(models.Seat, {
        through: "booking_seats",
        foreignKey: "bookingId",
        otherKey: "seatId",
      });
    }
  }
  Booking.init(
    {
      userId: DataTypes.INTEGER,
      showId: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Booking",
      tableName: "bookings",
    }
  );
  return Booking;
};
