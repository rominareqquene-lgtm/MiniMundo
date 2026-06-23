'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Child.init({
    id: DataTypes.UUID,
    userId: DataTypes.UUID,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Child',
  });
  return Child;
};