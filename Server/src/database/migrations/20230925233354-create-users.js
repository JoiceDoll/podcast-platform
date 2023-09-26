"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const schemaName = "podverse";
    const tableName = "users";
    await queryInterface.createTable(
      { schema: schemaName, tableName },
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      }
    );
  },
  async down(queryInterface, Sequelize) {
    const schemaName = "podverse";
    const tableName = "users";
    await queryInterface.dropTable({ schema: schemaName, tableName });
  },
};
