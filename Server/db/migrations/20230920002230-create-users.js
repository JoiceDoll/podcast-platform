'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('users', { 
id:{
  allowNull:false,
  primaryKey:true,
  type:Sequelize.STRING
},
name:{
  type: Sequelize.STRING
}
    
   });

  },

  async down (queryInterface) {

     await queryInterface.dropTable('users');

  }
};
