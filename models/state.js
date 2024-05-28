"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    static associate(models) {
      State.hasMany(models.City, { foreignKey: "stateId" });
    }
  }
  State.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "State",
      tableName: "states",
      timestamps: false,
    }
  );
  return State;
};
