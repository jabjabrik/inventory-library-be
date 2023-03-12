export default (sequelize, Sequelize) => {
    const TransactionModel = sequelize.define('transaction', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        book_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        admin_id: {
            type: Sequelize.INTEGER,
            allowNull: false
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
        }
    }, {
        freezeTableName: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    TransactionModel.associate = models => {
        TransactionModel.belongsTo(models.Book, { foreignKey: 'book_id' });
        TransactionModel.belongsTo(models.User, { foreignKey: 'user_id' });
        TransactionModel.belongsTo(models.Admin, { foreignKey: 'admin_id' });
    };

    return TransactionModel;
}