import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';


const router = Router()

router.get('/:userId', userController.getUserById)
router.get('/', userController.getAllUsers)

router.post('/', userController.createUser)
router.put('/:userId', userController.updateUserById)
router.delete('/:userId', userController.deleteUserById)

export default router