"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SelectMaster extends Model {
    static associate(models) {
      SelectMaster.hasMany(models.OptionMaster, {
        foreignKey: "selectId",
      });
    }
  }
  SelectMaster.init(
    {
      name: DataTypes.STRING,
      label: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "SelectMaster",
      tableName: "select_master",
      timestamps: false,
    }
  );
  return SelectMaster;
};
