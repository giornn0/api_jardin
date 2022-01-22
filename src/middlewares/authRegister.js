import {validate} from "./validateFn.js"
import { body } from 'express-validator';

/* validar que solo el colegio puede subir fotos? */
export const authRegister = validate([
  body('nombre_completo').notEmpty().isLength({min:4,max:30}),
  body('email').notEmpty().isEmail(),
  body('pass').notEmpty().isLength({ min: 6 ,max:30}),
  body('telefono').isLength({ min: 6,max:12 }),
  body('tipo').isLength({min:4,max:5}),
])
