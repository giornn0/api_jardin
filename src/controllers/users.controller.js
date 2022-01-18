import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import PrismaClient from "@prisma/client";
import { createColegio } from "./colegios.controller.js";
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
export const editUser = async (body, id) => {
  const { nombre_completo, pass, telefono, email, tipo } = body;
  let data = {
    nombre_completo,
    telefono,
    email,
    tipo,
  };
  if (pass) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt);
    data.pass = hash;
  }
  const result = await prisma.user.update({
    where: { id: Number(id) },
    data,
  });
  return result;
};
//elimina
export const deleteUser = async (id) => {
  const result = await prisma.user.delete({
    where: { id: Number(id) },
  });
  return result;
};

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
