import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import PrismaClient from "@prisma/client";
import { createColegio } from "./colegios.controller.js";
import { edit, erase } from "../services/users.services.js";
import dotenv from "dotenv";

const prisma = new PrismaClient.PrismaClient();

// Registra
export const registerUser = async ({
  nombre_completo,
  pass,
  telefono,
  email,
  tipo,
}) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(pass, salt);
  const result = await prisma.user.create({
    data: {
      nombre_completo,
      telefono,
      email,
      pass: hash,
      tipo,
    },
  });
  if (tipo === "dueño") await createColegio(body.colegio,result.id);
  return await genToken(result);
};
// Login
export const loginUser = async ({ email, pass }) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) throw Error(JSON.stringify({message:"Usuario inexistente!",statusCode:401}));
  if (!bcrypt.compareSync(pass, user.pass)) throw Error(JSON.stringify({message:"Contraseña errónea!",statusCode:401}));
  return await genToken(user);
};
//edita
export const editUser = async (req, res)=> {
  try {
    if(req.user.id != req.params.id) return res.status(401).json({message:"Sin autorización"})
    const result = await edit(req.body,req.params.id)
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}
//elimina
export const deleteUser =  async (req, res)=> {
  try {
    if(req.user.id != req.params.id) return res.status(401).json({message:"Sin autorización"})
    const result = await erase(req.params.id)
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}

const genToken = async ({ id, tipo, nombre_completo }) => {
  let token = await jwt.sign(
    {
      id,
      tipo,
      nombre_completo,
    },
    process.env.JWT_KEY,
    { expiresIn: "4h" })
  if (!token) throw Error("Error intendo crear token!");
  await prisma.user.update({
    where:{id:Number(id)},
    data:{token}
  })
  return {success:true,token}
};
