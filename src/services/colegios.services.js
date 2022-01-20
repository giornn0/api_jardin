import PrismaClient from "@prisma/client"
const prisma = new PrismaClient.PrismaClient();

export const getAll =  async({page,take,search})=>{
  const skip = page &&take?(page-1)*take:0
  const result = await prisma.colegio.findMany({
    skip,
    take: take? Number(take):30,
  })
  return result;
}
export const create =  async (body,user_id)=>{
  const {nombre,domicilio,telefono,email,tipo} = body
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
export const edit  =  async(body,id)=>{
  const {nombre,domicilio,telefono,email,tipo} = body
  const result = await prisma.colegio.create({
    where:{id:Number(id)},
    data:{
      nombre,
      domicilio,
      telefono,
      email,
      tipo,
    }
  })
  return result
}
export const erase = async (id)=>{
  const result = await prisma.colegio.delete({
    where:{id:Number(id)}
  })
  return result
}