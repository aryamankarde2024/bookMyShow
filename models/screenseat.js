'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class screenseat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  screenseat.init({
    screenId: DataTypes.INTEGER,
    seatid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'screenseat',
  });
  return screenseat;
};