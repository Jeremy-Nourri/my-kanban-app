'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
    await queryInterface.createTable('TasksLabels', {
      taskId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Tasks',
          key: 'id',
          as: 'task',
        }
      },
      labelId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Labels',
          key: 'id',
          as: 'label',
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TasksLabels');
  }
};
