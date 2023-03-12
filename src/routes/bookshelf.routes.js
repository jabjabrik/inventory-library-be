import { Router } from 'express';
import * as bookshelfController from '../controllers/bookshelf.controller.js';


const router = Router()

router.get('/:bookshelfId', bookshelfController.getBookshelfById)
router.get('/', bookshelfController.getAllBookshelves)

router.post('/', bookshelfController.createBookshelf)
router.put('/:bookshelfId', bookshelfController.updateBookshelfById)
router.delete('/:bookshelfId', bookshelfController.deleteBookshelfById)

export default router