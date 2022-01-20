import {validate} from "./validateFn.js"
import { body } from 'express-validator';

export const authLogin = validate([
  body('email').isEmail(),
  body('pass').isLength({ min: 6 ,max:30}),
])

/*export const authLogin = validate([
  body('email').isEmail().exists().withMessage("Sus crendeciales son invalidas "),
  body('pass').isLength({ min: 6 ,max:30}).exists().withMessage("Sus crendeciales son invalidas "),
  body('acess_token').exists().withMessage('Token no valido ')
]) */