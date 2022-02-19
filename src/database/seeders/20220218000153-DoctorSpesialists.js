"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     */
    await queryInterface.bulkInsert(
      "DoctorSpecialists",
      [
        {
          specilization: "Gynecologist/Obstetrician",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specilization: "General Physician",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specilization: "Dermatologist",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          specilization: "Bones Specialist",
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
