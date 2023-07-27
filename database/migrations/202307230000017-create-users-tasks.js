'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
    await queryInterface.createTable('UsersTasks', {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Users',
          key: 'id',
          as: 'author',
        }
      },
      taskId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Tasks',
          key: 'id',
          as: 'task',
        }
      },
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UsersTasks');
  }
};