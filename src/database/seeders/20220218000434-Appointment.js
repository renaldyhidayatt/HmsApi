"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     */
    await queryInterface.bulkInsert(
      "Appointments",
      [
        {
          doctorSpecialization: "Dentist",
          DoctorId: 1,
          UserId: 1,
          consultancyFees: 500,
          appointmentDate: "2022-02-18",
          appointmentTime: "07.09",
          userStatus: "Sedang Main Air",
          doctorStatus: "Sedang Main Tanah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doctorSpecialization: "Homeopath",
          DoctorId: 2,
          UserId: 2,
          consultancyFees: 500,
          appointmentDate: "2022-02-18",
          appointmentTime: "07.09",
          userStatus: "Sedang Main Air",
          doctorStatus: "Sedang Main Tanah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doctorSpecialization: "Ayurveda",
          DoctorId: 3,
          UserId: 3,
          consultancyFees: 500,
          appointmentDate: "2022-02-18",
          appointmentTime: "07.09",
          userStatus: "Sedang Main Air",
          doctorStatus: "Sedang Main Tanah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
