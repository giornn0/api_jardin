import express from"express";
import bodyParser from "body-parser"
import router from "./routes/main.routes.js"
const app = express();
app.use(bodyParser.json())


app.use(router)

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode | 500;
  try {
    const {statusCode,message} = JSON.parse(err.message)
    console.log(statusCode, message);
    res.status(statusCode).json({message});
  } catch (error) {
    res.status(statusCode).json({message:err.message});
  }
})

app.listen(process.env.PORT? process.env.PORT : 3500, ()=>{
  console.log(`Server listening in port: ${process.env.PORT? process.env.PORT : 3500}`)
})