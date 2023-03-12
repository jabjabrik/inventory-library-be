import db from '../database/index.js';
const { Admin } = db;

export const getAllAdmins = async (req, res) => {
    const admins = await Admin.findAll({
        attributes: {
            exclude: ['created_at', 'updated_at'],
        },
    });
    res.json({ status: true, totalData: admins.length, data: admins })
}

export const getAdminById = async (req, res) => {
    const { adminId } = req.params
    const admin = await Admin.findByPk(adminId, {
        attributes: { exclude: ['created_at', 'updated_at'] }
    });
    if (!admin) throw { message: `Admin with id (${adminId}) not found`, statusCode: 404 }
    res.json({ status: true, data: admin })
}

export const createAdmin = async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.create({ username, password });
    res.json({ status: true, data: admin })

}

export const updateAdminById = async (req, res) => {
    const { adminId } = req.params
    const { username, password } = req.body
    const admin = await Admin.update(
        { username, password }, { where: { id: adminId } }
    );
    if (admin.includes(0)) throw { message: `Admin with id (${adminId}) not found`, statusCode: 404 }
    // const adminData = await Book.findByPk(adminId);
    res.json({ status: true, message: 'updated' })
}

export const deleteAdminById = async (req, res) => {
    const { adminId } = req.params
    const admin = await Admin.destroy({ where: { id: adminId } });
    if (!admin) throw { message: `Admin with id (${adminId}) not found`, statusCode: 404 }
    res.json({ status: true, message: 'deleted' })
};