"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.belongsTo(models.State, { foreignKey: "stateId" });
      City.hasMany(models.Theater, { foreignKey: "location" });
    }
  }
  City.init(
    {
      stateId: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "City",
      tableName: "cities",
      timestamps: false,
    }
  );
  return City;
};
