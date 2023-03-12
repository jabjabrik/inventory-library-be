export default (sequelize, Sequelize) => {
    const BookModel = sequelize.define('book', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        category_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        bookshelf_id: {
            type: Sequelize.INTEGER,
            allowNull: false
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
            validate: { min: 0 }
        },
    }, {
        freezeTableName: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    BookModel.associate = models => {
        BookModel.belongsTo(models.Bookshelf, { foreignKey: 'bookshelf_id' });
        BookModel.belongsTo(models.Category, { foreignKey: 'category_id' });
    };

    return BookModel;
}