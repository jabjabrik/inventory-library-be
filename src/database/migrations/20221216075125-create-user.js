'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('user', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            gender: {
                type: Sequelize.ENUM('male', 'female'),
                allowNull: false
            },
            address: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            phone_number: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            birth_date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            birth_place: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('user');

    }
};
