import db from '../database/index.js';
const { User } = db;

export const getAllUsers = async (req, res) => {
    const users = await User.findAll({
        logging: false,
        attributes: { exclude: ['created_at', 'updated_at'] }
    });
    res.json({ status: true, data: users })
}

export const getUserById = async (req, res) => {
    const { userId } = req.params
    const user = await User.findByPk(userId, {
        logging: false,
        attributes: { exclude: ['created_at', 'updated_at'] }
    });
    if (!user) throw { message: `User with id (${userId}) not found`, statusCode: 404 }
    res.json(user)
}

export const createUser = async (req, res) => {
    const { name, gender, address, phone_number, birth_date, birth_place } = req.body;
    const user = await User.create(
        { name, gender, address, phone_number, birth_date, birth_place },
        { logging: false }
    );
    res.json(user)
}

export const updateUserById = async (req, res) => {
    const { userId } = req.params
    const { name, gender, address, phone_number, birth_date, birth_place } = req.body
    const user = await User.update(
        { name, gender, address, phone_number, birth_date, birth_place },
        { where: { id: userId }, logging: false }
    );
    if (user.includes(0)) throw { message: `User with id (${userId}) not found`, statusCode: 404 }
    const userData = await User.findByPk(userId);
    res.json({ status: true, data: userData })
}

export const deleteUserById = async (req, res) => {
    const { userId } = req.params
    const user = await User.destroy({ where: { id: userId } });
    if (!user) throw { message: `User with id (${userId}) not found`, statusCode: 404 }
    res.json({ status: true })
};