"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      Movie.hasMany(models.Show, { foreignKey: "movieId" });
    }
  }
  Movie.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      duration: {
        type: DataTypes.INTEGER, // Unit would be in minutes
      },
      releaseDate: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      sequelize,
      modelName: "Movie",
      tableName: "movies",
    }
  );
  return Movie;
};
