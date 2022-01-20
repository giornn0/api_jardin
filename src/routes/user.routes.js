import express from'express';
import {editUser,deleteUser} from "../controllers/users.controller.js"
import { contact } from '../middlewares/contact.js';
const router = express.Router();

<<<<<<< HEAD
router.post('/:id/contacto',contact)
router.put('/:id',editUser);
=======
router.put('/:id', editUser);
>>>>>>> a88bdad4694a9607cad4c46d81449a68ab34b819
router.delete('/:id',deleteUser);

export default router;