import express from'express';
import {getAllColegios,createColegio,editColegio,deleteColegio} from "../controllers/colegios.controller.js"
const router = express.Router();

router.get("/", async (req, res,next)=>{
  try {
    const result = await getAllColegios(req.query)
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res,next)=> {
  try {
    const result = await createColegio(req.body,req.user)
    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
});
router.put('/:id', async (req, res,next)=> {
  try {
    const result = await editColegio(req.body,req.params.id)
    res.status(202).json(result)
  } catch (error) {
    next(error)
  }
});
router.delete('/:id', async (req, res,next)=> {
  try {
    const result = await deleteColegio(req.params.id)
    res.status(202).json(result)
  } catch (error) {
    next(error)
  }
});

export default router;