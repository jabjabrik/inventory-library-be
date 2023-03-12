import { Router } from 'express';
import * as transactionController from '../controllers/transaction.controller.js';


const router = Router()

// router.get('/:transactionId', transactionController.getTransactionById)
// router.get('/', transactionController.getAllTransactions)

router.post('/', transactionController.createBorrowingBook)
router.post('/:transactionId', transactionController.createBookReturn)
// router.delete('/:transactionId', transactionController.deleteTransactionById)

export default router