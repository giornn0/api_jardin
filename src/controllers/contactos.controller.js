import PrismaClient from "@prisma/client"
const prisma = new PrismaClient.PrismaClient();

// create
export const createContacto=(user,body)=>{
  const {colegio_id,detalles} = body
  const {telefono,email} = user
  const result = await prisma.contacto.create({
    data:{
      telefono,
      email,
      detalles,
      colegio_id
    }
  })
  return result;
}

