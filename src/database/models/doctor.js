'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
    }
  }
  Doctor.init({
    specilization: DataTypes.STRING,
    doctorName: DataTypes.STRING,
    address: DataTypes.TEXT,
    docFees: DataTypes.STRING,
    contactno: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};