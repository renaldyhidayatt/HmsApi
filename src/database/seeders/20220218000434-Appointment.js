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
          doctorId: 1,
          userId: 1,
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
          doctorId: 2,
          userId: 2,
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
          doctorId: 3,
          userId: 3,
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
