import express from"express";
import bodyParser from "body-parser"
import{registerUser,loginUser} from "./controllers/users.controller.js"
import {authRegister} from "./middlewares/authRegister.js"
import {authLogin} from "./middlewares/authLogin.js"
import {authUser} from "./middlewares/authUser.js"

const app = express();
app.use(bodyParser.json())

app.post("/user",authRegister,async (req,res,next)=>{
  try {
    const result = await registerUser(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error)
  }
})

app.post("/login",authLogin,async (req,res,next)=>{
  try {
    const result = await loginUser(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error)
  }
})
app.get("/testingTokenValidation",authUser,async (req,res,next)=>{
  try {
    const result = req.user
    res.status(201).json(result);
  } catch (error) {
    next(error)
  }
})

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode | 500;
  try {
    const {statusCode,message} = JSON.parse(err.message)
    console.log(statusCode, message);
    res.status(statusCode).json({message});
  } catch (error) {
    res.status(statusCode).json({message:err.message});
  }
})

app.listen(process.env.PORT? process.env.PORT : 3500, ()=>{
  console.log(`Server listening in port: ${process.env.PORT? process.env.PORT : 3500}`)
})