/// users = padre o madre
// colegios = duenos 
import jwt from "jsonwebtoken";
import PrismaClient from "@prisma/client";
import dotenv from "dotenv";

const prisma = new PrismaClient.PrismaClient();

//admin 
export const authUser = async (req,res,next)=>{
  try {
    const token = req.headers.authorization.replace("Bearer ","")
    const valid = await jwt.verify(token,process.env.JWT_KEY)
    if(!valid) return res.status(401).json({message:"Error intentando logear!"})
    const user = await prisma.user.findFirst({
      where:{
          token
        }
    })
    if(!user) return res.status(401).json({message:"Error intentando ingresar!"})
    const {id,tipo} = user
    req.user = {
      id,
      tipo
    }
    next()
  } catch (error) {
    next(error)
  }
}