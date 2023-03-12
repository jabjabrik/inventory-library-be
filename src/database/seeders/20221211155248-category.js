'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category', [
      {
        name: 'programming',
        created_at: Sequelize.fn('now'),
        updated_at: Sequelize.fn('now'),
      },
      {
        name: 'fantasy',
        created_at: Sequelize.fn('now'),
        updated_at: Sequelize.fn('now'),
      },
      {
        name: 'horror',
        created_at: Sequelize.fn('now'),
        updated_at: Sequelize.fn('now'),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('category', null, {});
  }
};
