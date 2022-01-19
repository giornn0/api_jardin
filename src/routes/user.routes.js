import express from'express';
import {editUser,deleteUser} from "../controllers/users.controller.js"

const router = express.Router();


router.put('/:id', async (req, res)=> {
  try {
    if(req.user.id != req.params.id) return res.status(401).json({message:"Sin autorización"})
    const result = await editUser(req.body,req.params.id)
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
});
router.delete('/:id', async (req, res)=> {
  try {
    if(req.user.id != req.params.id) return res.status(401).json({message:"Sin autorización"})
    const result = await deleteUser(req.params.id)
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
});

export default router;
