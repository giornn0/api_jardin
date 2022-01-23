import PrismaClient from "@prisma/client"
import {validate} from "./validateFn.js"
import { body } from 'express-validator';

const prisma = new PrismaClient.PrismaClient();

export const ownerColegio = async(req,res,next)=>{
  try {
    const colegio = await  prisma.colegio.findUnique({
      where:{
        user_id:req.user.id
      }
    })
    if(colegio.id != req.params.id) return res.status(401).json({message:"Usuarion sin permisos para esta acción!"})
    req.colegio = colegio
    next()
  } catch (error) {
    next(error)
  }
}

export const authUserForCreation = async(req,res,next) =>{
  try{
      const school = await prisma.colegio.findUnique({
         
          where:{
              user_id:req.user.id
          }
      })

      if(school?.id){
          return res.status(401).json({mensaje: 'Este usuario ya tiene un colegio' })
      }
  }catch(err){
    next(err)
  }
}

export const validUpdateColegio = validate([
  body('tipo').optional().isString({min:4,max:6}).trim(),
  body('nombre').optional().isString({min:4,max:50}).trim(),
  body('estado').optional().isBoolean(),
  body('domicilio').optional().isString({min:4,max:255}).trim(),
  body('descripcion').optional().isString({min:4,max:255}).trim(),
  body('telefono').optional().isString({min:4,max:50}).trim(),
  body('email').optional().isEmail()
])
