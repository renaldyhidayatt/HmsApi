'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Appointment.belongsTo(sequelize.models.Doctor, {
        foreignKey: "DoctorId",
        as: "doctors"
      });
      Appointment.belongsTo(sequelize.models.Users, {
        foreignKey: "UserId",
        as: "users"
      })
    }
  }
  Appointment.init({
    doctorSpecialization: DataTypes.STRING,
    consultancyFees: DataTypes.STRING,
    appointmentDate: DataTypes.STRING,
    appointmentTime: DataTypes.STRING,
    userStatus: DataTypes.STRING,
    doctorStatus: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};