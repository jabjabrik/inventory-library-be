'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('book', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            bookshelf_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'bookshelf',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'NO ACTION'
            },
            category_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'category',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'NO ACTION'
            },
            isbn: {
                type: Sequelize.STRING(50),
                unique: true,
                allowNull: false
            },
            title: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            author: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            publisher: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            year: {
                type: Sequelize.INTEGER(4),
                allowNull: false
            },
            amount: {
                type: Sequelize.INTEGER(50),
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
        await queryInterface.dropTable('book');
    }
};
