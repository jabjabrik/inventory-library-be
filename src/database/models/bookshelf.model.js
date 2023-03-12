export default (sequelize, Sequelize) => {
    const BookshelfModel = sequelize.define('bookshelf', {
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

    BookshelfModel.associate = models => { };
    return BookshelfModel;
}