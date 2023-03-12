import db from '../database/index.js';
const { Category } = db;

export const getAllCategories = async (req, res) => {
    const categories = await Category.findAll({
        attributes: ['id', ['name', 'category']]
    });
    res.json({ status: true, totalData: categories.length, data: categories })
}

export const getCategoryById = async (req, res) => {
    const { categoryId } = req.params
    const category = await Category.findByPk(categoryId, {
        attributes: { exclude: ['created_at', 'updated_at'] }
    });
    if (!category) throw { message: `Category with id (${categoryId}) not found`, statusCode: 404 }
    res.json({ status: true, data: category })
}

export const createCategory = async (req, res) => {
    const { category: name } = req.body;
    const category = await Category.create({ name });
    res.json({ status: true, data: category })

}

export const updateCategoryById = async (req, res) => {
    const { categoryId } = req.params
    const { category: name } = req.body
    const book = await Category.update(
        { name }, { where: { id: categoryId } }
    );
    if (book.includes(0)) throw { message: `Category with id (${categoryId}) not found`, statusCode: 404 }
    // const bookData = await Book.findByPk(bookId);
    res.json({ status: true, message: 'updated' })
}

export const deleteCategoryById = async (req, res) => {
    const { categoryId } = req.params
    const category = await Category.destroy({ where: { id: categoryId } });
    if (!category) throw { message: `Category with id (${categoryId}) not found`, statusCode: 404 }
    res.json({ status: true, message: 'deleted' })
};