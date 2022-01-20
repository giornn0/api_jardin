import express from'express';
import {getAllColegios,createColegio,editColegio,deleteColegio} from "../controllers/colegios.controller.js"
import {upload} from "../middlewares/multer.js"
import { contact } from '../middlewares/contact.js';
const router = express.Router();

router.get("/", getAllColegios)
router.post('/',upload.single('image'), createColegio);
router.put('/:id',editColegio);
router.delete('/:id', deleteColegio);

router.post('/:id/contacto',contact)

export default router;