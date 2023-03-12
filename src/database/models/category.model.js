export default (sequelize, Sequelize) => {
    const categoryModel = sequelize.define('category', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    }, {
        freezeTableName: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    categoryModel.associate = models => { };
    return categoryModel;
}