// 
import express from'express';
import {authRegister} from "../middlewares/authRegister.js"
import {authLogin} from "../middlewares/authLogin.js"
import {authUser} from "../middlewares/authUser.js"
import {registerUser,loginUser} from "../controllers/users.controller.js"
import userRoutes from "./user.routes.js"
import colegioRoutes from "./colegio.routes.js"

const router = express.Router();
//Login route
router.post("/register",authRegister,async (req,res,next)=>{
  try {
    const result = await registerUser(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error)
  }
})
// define the about route
router.post("/login",authLogin,async (req,res,next)=>{
  try {
    const result = await loginUser(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error)
  }
})

// router.use(authUser)
router.use("/users",userRoutes)
router.use("/colegios",colegioRoutes)

export default router;