"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ScreenSeat extends Model {
    static associate(models) {}
  }
  ScreenSeat.init(
    {
      screenId: DataTypes.INTEGER,
      seatId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ScreenSeat",
      tableName: "screen_seats",
      timestamps: false,
    }
  );
  return ScreenSeat;
};
