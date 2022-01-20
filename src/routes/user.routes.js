import express from'express';
import {editUser,deleteUser} from "../controllers/users.controller.js"
const router = express.Router();

router.put('/:id', editUser);
router.delete('/:id',deleteUser);

export default router;