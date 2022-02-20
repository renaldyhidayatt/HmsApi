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
      Doctor.hasMany(sequelize.models.Appointment, {
        as: "appointments"
      })
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