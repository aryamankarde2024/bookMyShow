"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theater extends Model {
    static associate(models) {
      Theater.hasMany(models.Screen, { foreignKey: "screenId" });
      Theater.belongsTo(models.City, { foreignKey: "location" });
    }
  }
  Theater.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.INTEGER,
      },
      address: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Theater",
      tableName: "theaters",
    }
  );
  return Theater;
};
