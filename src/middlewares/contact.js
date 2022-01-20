import {body} from 'express-validator'
import { validate } from './validateFn.js'

export const contact = validate([
    body('nombre_completo').notEmpty().withMessage('Debe completar el campo').trim(),
    body('email').notEmpty().withMessage('Debe completar un email valido').bail().isEmail(),
    body('telefono').notEmpty().isLength({min:4,max:30}),
    body('titulo').isLength({min:5,max:30}),
    body('detalle').notEmpty().isLength({min:4,max:255}),
    
])

