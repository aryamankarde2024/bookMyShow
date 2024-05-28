"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    static associate(models) {
      Seat.belongsTo(models.Screen, { foreignKey: "screenId" });
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
        type: Sequelize.ENUM,
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
