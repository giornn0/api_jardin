import { body } from "express-validator";
import { validate } from "./validateFn.js";


export const validateCreateColegios = validate([
    body('nombre').notEmpty().withMessage('Complete su nombre'),
    body('estado').notEmpty().isBoolean(),
    body('domicilio').notEmpty(),
    body('descripcion').notEmpty(),
    body('email').isEmail().notEmpty().withMessage('Complete con un email valida').bail(),
    body('telefono').notEmpty().isString({min:4,max:50}).bail(),
    body('tipo').isLength({min:6,max:10}),
])