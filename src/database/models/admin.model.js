export default (sequelize, Sequelize) => {
    const AdminModel = sequelize.define('admin', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING(50),
            unique: true,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(200),
            allowNull: false
        },
    }, {
        freezeTableName: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    AdminModel.associate = models => { };
    return AdminModel;
}