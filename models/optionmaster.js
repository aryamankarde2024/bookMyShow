"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OptionMaster extends Model {
    static associate(models) {
      OptionMaster.belongsTo(models.SelectMaster, { foreignKey: "selectId" });
      OptionMaster.hasMany(models.Booking, {
        foreignKey: "status",
        as: "bookingStatus",
      });
      OptionMaster.hasMany(models.Payment, {
        foreignKey: "status",
        as: "paymentStatus",
      });
    }
  }
  OptionMaster.init(
    {
      selectId: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "OptionMaster",
      tableName: "option_master",
      timestamps: false,
    }
  );
  return OptionMaster;
};
