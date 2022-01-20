import {validate} from "./validateFn.js"
import { body } from 'express-validator';
import path from 'path'
/* validar que solo el colegio puede subir fotos? */
export const authRegister = validate([
  body('nombre_completo').notEmpty().isLength({min:4,max:30}),
  body('email').notEmpty().isEmail(),
  body('pass').notEmpty().isLength({ min: 6 ,max:30}),
  body('telefono').isLength({ min: 6,max:12 }),
  body('tipo').notEmpty().isLength({min:4,max:5}),
  body('photo').custom((value,{req}) =>{

    let file= req.file;
    let acceptedExtensions = ['.jpg','.png','.gif','.jpeg'];

    if(!file){
      throw new Error("Subir una imagen")
    }else{
      let fileExtensions = path.extname(file.originalname)
      if(!acceptedExtensions.includes(fileExtensions)){
        throw new Error(
          `Las extensiones permitidas son ${acceptedExtensions.join(',')}`
        )
      }
    }
     return true
  })
  
])