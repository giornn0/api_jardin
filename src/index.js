const express = require("express");
const {PrismaClient, Prisma} = require("@prisma/client")

const prisma = new PrismaClient();
const app = express();

app.get("/jardines",async (req,res,next)=>{
  try {
    const result = await prisma.jardin.findMany()
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})
app.post("/jardines",async (req,res,next)=>{
  try {
    const {nombre,domicilio,telefono,email} = req.body
    const result = await prisma.jardin.create({
      data:{
        nombre,
        domicilio,
        telefono,
        email,
      }
    })
    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
})
app.put("/jardines/:id",async (req,res,next)=>{
  try {
    const {nombre,domicilio,telefono,email} = req.body
    const {id} = req.params
    const result = await prisma.jardin.update({
      where:{id: Number(id)},
      data:{
        nombre,
        domicilio,
        telefono,
        email,
      }
    })
    res.status(202).json(result)
  } catch (error) {
    next(error)
  }
})
app.post("/contacto",async(req,res,next)=>{
  try {
    const {telefono,email,detalles,jardin_id} = req.body
    const result = await prisma.contacto.create({
      data:{
        telefono,
        email,
        detalles,
        jardin_id
      }
    })
    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
})

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode | 500;
  console.log(statusCode, err.message);
  res.status(statusCode).json({message:err.message});
})

app.listen(process.env.PORT? process.env.PORT : 3500, ()=>{
  console.log(`Server listening in port: ${process.env.PORT? process.env.PORT : 3500}`)
})