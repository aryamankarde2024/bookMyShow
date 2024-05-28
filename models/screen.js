"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Screen extends Model {
    static associate(models) {
      Screen.hasMany(models.Seat, { foreignKey: "screenId" });
      Screen.belongsTo(models.Theater, { foreignKey: "theaterId" });
      Screen.belongsToMany(models.Show, { foreignKey: "screenId" });
    }
  }
  Screen.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      theaterId: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Screen",
      tableName: "screens",
      timestamps: false,
    }
  );
  return Screen;
};
