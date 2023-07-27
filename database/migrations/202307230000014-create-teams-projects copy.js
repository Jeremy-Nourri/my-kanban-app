'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
    await queryInterface.createTable('TeamsProjects', {
      teamId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Teams',
          key: 'id',
          as: 'team',
        }
      },
      projectId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Projects',
          key: 'id',
          as: 'project',
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TeamsProjects');
  }
};