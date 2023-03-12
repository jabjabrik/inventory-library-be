'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('bookshelf', [
            {
                name: 'rak buku 1',
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: 'rak buku 2',
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: 'rak buku 3',
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: 'rak buku 4',
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: 'rak buku 5',
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('bookshelf', null, {});
    }
};
