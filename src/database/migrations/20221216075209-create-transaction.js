'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('transaction', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            book_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'book',
                    key: 'id',
                    onUpdate: 'CASCADE',
                    onDelete: 'NO ACTION'
                }
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id',
                    onUpdate: 'CASCADE',
                    onDelete: 'NO ACTION'
                }
            },
            admin_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'admin',
                    key: 'id',
                    onUpdate: 'CASCADE',
                    onDelete: 'NO ACTION'
                }
            },
            date_borrowed: {
                type: Sequelize.DATEONLY,
                allowNull: false,
                defaultValue: Sequelize.fn('now')
            },
            due_date: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            date_returned: {
                type: Sequelize.DATEONLY,
                defaultValue: null
            },
            is_late: {
                type: Sequelize.BOOLEAN,
                defaultValue: null
            },
            amount: {
                type: Sequelize.INTEGER,
                allowNull: false
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
        await queryInterface.dropTable('transaction');
    }
};
