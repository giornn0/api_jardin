import PrismaClient from "@prisma/client"
import {paginator} from "../utils.js"
const prisma = new PrismaClient.PrismaClient();

export const getAll =  async({page,take,search})=>{
  const skip = page &&take?(page-1)*take:0
  const [data,count] = await Promise.allSettled([
    prisma.colegio.findMany({
      skip,
      take: take? Number(take):30,
    }),
    prisma.colegio.count()
  ])
  return paginator({data:data.value,count:count.value,page,take});
}
export const create =  async (values,user_id)=>{
  const {nombre,domicilio,telefono,email,tipo} = values
  const result = await prisma.colegio.create({
    data:{
      nombre,
      domicilio,
      telefono,
      email,
      tipo,
      user_id
    }
  })
  return result
}
export const edit  =  async(values,id)=>{
  const result = await prisma.colegio.create({
    where:{id:Number(id)},
    data:values
  })
  return result
}
export const erase = async (id)=>{
  const result = await prisma.colegio.delete({
    where:{id:Number(id)}
  })
  return result
}