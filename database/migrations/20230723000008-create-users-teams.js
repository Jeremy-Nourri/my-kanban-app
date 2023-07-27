'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
    await queryInterface.createTable('UsersTeams', {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Users',
          key: 'id',
        }
      },
      teamId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Teams',
          key: 'id',
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UsersTeams');
  }
};
