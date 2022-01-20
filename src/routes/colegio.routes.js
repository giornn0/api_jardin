import express from'express';
import {getAllColegios,createColegio,editColegio,deleteColegio} from "../controllers/colegios.controller.js"


/* Middleware */

import {upload } from '../middlewares/multer.js'

const router = express.Router();

router.get("/",(req,res,next)=>{
  console.log(req)
  next()
}, getAllColegios)
router.post('/',upload.single('pepito'),createColegio);
router.put('/:id',editColegio);
router.delete('/:id', deleteColegio);

export default router;