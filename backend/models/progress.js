'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Progress.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    childId: DataTypes.UUID,
    activityId: DataTypes.UUID,
    starsEarned: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    completedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Progress',
  });
  return Progress;
};