"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    static associate(models) {
      Show.hasMany(models.Booking, { foreignKey: "showId" });
      Show.belongsTo(models.Movie, { foreignKey: "movieId" });
      Show.belongsTo(models.Screen, { foreignKey: "screenId" });
    }
  }
  Show.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      movieId: {
        type: DataTypes.INTEGER,
      },
      screenId: {
        type: DataTypes.INTEGER,
      },
      startsAt: {
        type: DataTypes.DATE,
      },
      premium: {
        type: DataTypes.INTEGER,
      },
      diamond: {
        type: DataTypes.INTEGER,
      },
      gold: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Show",
      tableName: "shows",
      timestamps: false,
    }
  );
  return Show;
};
