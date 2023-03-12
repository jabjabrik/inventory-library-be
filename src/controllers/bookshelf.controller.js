import db from '../database/index.js';
const { Bookshelf } = db;

export const getAllBookshelves = async (req, res) => {
    const bookshelves = await Bookshelf.findAll({
        attributes: ['id', ['name', 'bookshelf']]

    });
    res.json({ status: true, totalData: bookshelves.length, data: bookshelves })
}

export const getBookshelfById = async (req, res) => {
    const { bookshelfId } = req.params
    const bookshelf = await Bookshelf.findByPk(bookshelfId, {
        attributes: { exclude: ['created_at', 'updated_at'] }
    });
    if (!bookshelf) throw { message: `Bookshelf with id (${bookshelfId}) not found`, statusCode: 404 }
    res.json({ status: true, data: bookshelf })
}

export const createBookshelf = async (req, res) => {
    const { bookshelf: name } = req.body;
    const bookshelf = await Bookshelf.create({ name });
    res.json({ status: true, data: bookshelf })

}

export const updateBookshelfById = async (req, res) => {
    const { bookshelfId } = req.params
    const { bookshelf: name } = req.body
    const book = await Bookshelf.update(
        { name }, { where: { id: bookshelfId } }
    );
    if (book.includes(0)) throw { message: `Bookshelf with id (${bookshelfId}) not found`, statusCode: 404 }
    // const bookData = await Book.findByPk(bookId);
    res.json({ status: true, message: 'updated' })
}

export const deleteBookshelfById = async (req, res) => {
    const { bookshelfId } = req.params
    const bookshelf = await Bookshelf.destroy({ where: { id: bookshelfId } });
    if (!bookshelf) throw { message: `Bookshelf with id (${bookshelfId}) not found`, statusCode: 404 }
    res.json({ status: true, message: 'deleted' })
};