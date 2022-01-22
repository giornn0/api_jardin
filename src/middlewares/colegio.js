import {validate} from "./validateFn.js"
import { body } from 'express-validator';

export const colegio = validate([
    body('nombre').notEmpty().isLength({min:4,max:30}),
    body('estado').notEmpty().isBoolean(),
    body('domicilio').notEmpty(),
    body('email').notEmpty().withMessage('Escriba un email valido').bail(),
    body('pass').notEmpty().isLength({ min: 6 ,max:30}).bail(),
    body('telefono').isLength({ min: 6,max:12 }),
    body('tipo').isLength({min:4,max:5}),
  ])
  
  