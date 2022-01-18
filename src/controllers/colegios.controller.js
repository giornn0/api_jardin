import PrismaClient from "@prisma/client"
const prisma = new PrismaClient.PrismaClient();

//get all Colegios simple paginator
export const getAllColegios = async({page,take,search})=>{
  const skip = page &&take?(page-1)*take:0
  const result = await prisma.colegio.findMany({
    skip,
    take: take? Number(take):30,
  })
  return result;
}

// crea un user 
export const createColegio = async (body,user_id)=>{
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
//edita
export const editColegio = async(body,id)=>{
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
//elimina 
export const deleteColegio = async(id)=>{
  const result = await prisma.colegio.delete({
    where:{id:Number(id)}
  })
}
