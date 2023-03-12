import db from '../database/index.js';
const { Book } = db;

export const getAllBooks = async (req, res) => {
    const books = await Book.findAll({
        raw: true,
        include: [
            { association: 'category', attributes: [] },
            { association: 'bookshelf', attributes: [] }
        ],
        attributes: {
            exclude: ['created_at', 'updated_at', 'bookshelf_id', 'category_id'],
            include: [
                [db.Sequelize.col('category.id'), 'category'],
                [db.Sequelize.col('bookshelf.id'), 'bookshelf']
            ]
        }
    });
    res.json({ status: true, totalData: books.length, data: books })
}

export const getBookById = async (req, res) => {
    const { bookId } = req.params
    const book = await Book.findByPk(bookId, {
        raw: true,
        include: [
            { association: 'category', attributes: [] },
            { association: 'bookshelf', attributes: [] }
        ],
        attributes: {
            exclude: ['created_at', 'updated_at', 'bookshelf_id', 'category_id'],
            include: [
                [db.Sequelize.col('category.name'), 'category'],
                [db.Sequelize.col('bookshelf.name'), 'bookshelf']
            ]
        }
    });
    if (!book) throw { message: `Book with id (${bookId}) not found`, statusCode: 404 }
    res.json({ status: true, data: book })
}

export const createBook = async (req, res) => {
    console.log(req.body);
    const { isbn, title, author, publisher, year, amount, category: category_id, bookshelf: bookshelf_id } = req.body;
    const book = await Book.create({ isbn, title, author, publisher, year, amount, category_id, bookshelf_id });
    res.json({ status: true, data: book })

}

export const updateBookById = async (req, res) => {
    const { bookId } = req.params
    const { isbn, title, author, publisher, year, amount, category_id, bookshelf_id } = req.body
    const book = await Book.update(
        { isbn, title, author, publisher, year, amount, category_id, bookshelf_id },
        { where: { id: bookId } }
    );
    if (book.includes(0)) throw { message: `Book with id (${bookId}) not found`, statusCode: 404 }
    // const bookData = await Book.findByPk(bookId);
    res.json({ status: true, message: 'updated' })
}

export const deleteBookById = async (req, res) => {
    const { bookId } = req.params
    const book = await Book.destroy({ where: { id: bookId } });
    if (!book) throw { message: `Book with id (${bookId}) not found`, statusCode: 404 }
    res.json({ status: true, message: 'deleted' })
};