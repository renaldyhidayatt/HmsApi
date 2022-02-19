"use strict";
const bcrypt = require('bcryptjs')

module.exports = {
  async up(queryInterface, Sequelize) {
    const password = bcrypt.hashSync("lisaand", 10)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "John Doe",
          address: "Testing bro",
          city: "Males",
          gender: "Male",
          email: "yo@gmail.com",
          password: password,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fullName: "Jenny Doe",
          address: "Testing bro",
          city: "Males",
          gender: "Female",
          email: "JennyDoe@gmail.com",
          password: password,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fullName: "Lisa Doe",
          address: "Testing bro",
          city: "Males",
          gender: "Female",
          email: "lisablankpink@gmail.com",
          password: password,
          createdAt: new Date(),
          updatedAt: new Date()
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
