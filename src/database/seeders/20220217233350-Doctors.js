"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     */
    await queryInterface.bulkInsert(
      "Doctors",
      [
        {
          doctorName: "John Doe",
          specilization: "Dentist",
          address: "Males",
          docFees: "Rp.1000",
          contactno: "08812121313",
          docEmail: "JohnDoe@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doctorName: "Jenny",
          specilization: "Homeopath",
          address: "Males",
          docFees: "Rp.1000",
          contactno: "08812121313",
          docEmail: "Jenny@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doctorName: "Lisa",
          specilization: "Gynecologist/Obstetrician",
          address: "Males",
          docFees: "Rp.1000",
          contactno: "08812121313",
          docEmail: "JohnDoe@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Doctors", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
