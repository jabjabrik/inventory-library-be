import { Router } from 'express';
import * as categoryController from '../controllers/category.controller.js';


const router = Router()

router.get('/:categoryId', categoryController.getCategoryById)
router.get('/', categoryController.getAllCategories)

router.post('/', categoryController.createCategory)
router.put('/:categoryId', categoryController.updateCategoryById)
router.delete('/:categoryId', categoryController.deleteCategoryById)

export default router