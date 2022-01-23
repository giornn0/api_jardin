import {validate} from "./validateFn.js"
import { body } from 'express-validator';

export const authLogin = validate([
  body('email').isEmail(),
  body('pass').isLength({ min: 6 ,max:30}),
])
