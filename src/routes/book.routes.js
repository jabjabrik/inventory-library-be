import { Router } from 'express';
import * as bookController from '../controllers/book.controller.js';


const router = Router()

router.get('/', bookController.getAllBooks)
router.get('/:bookId', bookController.getBookById)

router.post('/', bookController.createBook)
router.put('/:bookId', bookController.updateBookById)
router.delete('/:bookId', bookController.deleteBookById)

export default router