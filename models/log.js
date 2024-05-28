"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Log extends Model {
    static associate(models) {
      Log.hasMany(models.OptionMaster, { foreignKey: "type" });
    }
  }
  Log.init(
    {
      type: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Log",
      tableName: "logs",
    }
  );
  return Log;
};
