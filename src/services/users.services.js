import PrismaClient from "@prisma/client"
const prisma = new PrismaClient.PrismaClient();

export const edit = async (body, id) => {
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
export const erase = async (id) => {
  const result = await prisma.user.delete({
    where: { id: Number(id) },
  });
  return result;
};