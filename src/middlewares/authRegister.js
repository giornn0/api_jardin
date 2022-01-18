import {validate} from "./validateFn.js"
import { body } from 'express-validator';

export const authRegister = validate([
  body('email').isEmail(),
  body('pass').isLength({ min: 6 ,max:30}),
  body('nombre_completo').isLength({min:4,max:30}),
  body('telefono').isLength({ min: 6,max:12 }),
  body('tipo').isLength({min:4,max:5}),
])