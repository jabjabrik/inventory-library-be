'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('admin', [{
            username: 'admin',
            password: 'admin',
            created_at: Sequelize.fn('now'),
            updated_at: Sequelize.fn('now'),
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('admin', null, {});
    }
};
