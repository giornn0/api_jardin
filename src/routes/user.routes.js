import express from'express';
import {editUser,deleteUser} from "../controllers/users.controller.js"
import { contact } from '../middlewares/contact.js';
const router = express.Router();

router.post('/:id/contacto',contact)
router.put('/:id',editUser);
router.delete('/:id',deleteUser);

export default router;

const Colegio = { 
  id: "",
  tipo: "",
  nombre: "",
  estado: "",
  domicilio: "",
  telefono: "",
  email: "",
  contactos: "",
  user: "",
  user_id: "",
  created_at: "",
  updated_at: "",
}

const obj = Object.assign(Colegio,{
  id:25,
  user:"Marcelo"
})
console.log(obj)