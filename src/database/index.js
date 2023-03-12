import Sequelize from 'sequelize';
import config from '../config/config.js';
import * as models from './models/index.js';

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: { max: 5, min: 1, acquire: 30000, idle: 10000, evict: 10000, },
    logging: false
});

const db = {
    Sequelize, sequelize,
    User: models.userModel(sequelize, Sequelize),
    Book: models.bookModel(sequelize, Sequelize),
    Admin: models.adminModel(sequelize, Sequelize),
    Category: models.categoryModel(sequelize, Sequelize),
    Bookshelf: models.bookshelfModel(sequelize, Sequelize),
    Transaction: models.transactionModel(sequelize, Sequelize),
};

db.User.associate(db);
db.Book.associate(db);
db.Admin.associate(db);
db.Category.associate(db);
db.Bookshelf.associate(db);
db.Transaction.associate(db);

export default db;