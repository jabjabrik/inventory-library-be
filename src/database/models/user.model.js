export default (sequelize, Sequelize) => {
    const UserModel = sequelize.define('user', {
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
        }
    }, {
        freezeTableName: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    UserModel.associate = models => { };

    return UserModel;
}