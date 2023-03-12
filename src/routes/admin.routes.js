import { Router } from 'express';
import * as adminController from '../controllers/admin.controller.js';


const router = Router()

router.get('/:adminId', adminController.getAdminById)
router.get('/', adminController.getAllAdmins)

router.post('/', adminController.createAdmin)
router.put('/:adminId', adminController.updateAdminById)
router.delete('/:adminId', adminController.deleteAdminById)

export default router