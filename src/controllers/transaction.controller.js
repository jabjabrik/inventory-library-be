import db from '../database/index.js';
const { sequelize, Transaction: Transaction, Book } = db;

// export const getAllTransactions = async (req, res) => {
//     const transactions = await Transaction.findAll({
//         attributes: {
//             exclude: ['created_at', 'updated_at'],
//         },
//     });
//     res.json({ status: true, totalData: transactions.length, data: transactions })
// }

// export const getTransactionById = async (req, res) => {
//     const { transactionId } = req.params
//     const transaction = await Transaction.findByPk(transactionId, {
//         attributes: { exclude: ['created_at', 'updated_at'] }
//     });
//     if (!transaction) throw { message: `Transaction with id (${transactionId}) not found`, statusCode: 404 }
//     res.json({ status: true, data: transaction })
// }

export const createBorrowingBook = async (req, res) => {
    const { date_borrowed, due_date, amount, book_id, user_id, admin_id } = req.body;
    const result = await sequelize.transaction(async transaction => {
        const trans = await Transaction.create(
            { date_borrowed, due_date, amount, book_id, user_id, admin_id },
            { transaction }
        );

        const book = await Book.findByPk(book_id, { transaction })

        if (!book || amount > book.amount) {
            throw { statusCode: 400, message: "number of books not available" }
        }

        await Book.decrement(
            { amount },
            { where: { id: book_id }, transaction }
        );
        return trans
    });
    res.json({ status: true, data: result.get() })
}

export const createBookReturn = async (req, res) => {
    const { date_returned } = req.body;
    const { transactionId } = req.params

    const transaction = await Transaction.findByPk(transactionId)
    if (transaction.date_returned) {
        throw { statusCode: 400, message: 'this transaction was returned' }
    }

    if (new Date(date_returned) < new Date(transaction.date_borrowed)) {
        throw { statusCode: 400, message: 'please enter a valid date' }
    }

    const isLate = new Date(transaction.due_date) < new Date(date_returned)

    await Transaction.update(
        { date_returned, is_late: isLate },
        { where: { id: transactionId } }
    );
    res.json({ status: true, message: 'success' })
}

// export const updateTransactionById = async (req, res) => {
//     const { transactionId } = req.params
//     const { username, password } = req.body
//     const transaction = await Transaction.update(
//         { username, password }, { where: { id: transactionId } }
//     );
//     if (transaction.includes(0)) throw { message: `Transaction with id (${transactionId}) not found`, statusCode: 404 }
//     // const transactionData = await Book.findByPk(transactionId);
//     res.json({ status: true, message: 'updated' })
// }

// export const deleteTransactionById = async (req, res) => {
//     const { transactionId } = req.params
//     const transaction = await Transaction.destroy({ where: { id: transactionId } });
//     if (!transaction) throw { message: `Transaction with id (${transactionId}) not found`, statusCode: 404 }
//     res.json({ status: true, message: 'deleted' })
// };