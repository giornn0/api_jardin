import express from"express";
import bodyParser from "body-parser"
import router from "./routes/main.routes.js"
import error from "./middlewares/errorHandler.js"

const app = express();
app.use(bodyParser.json())

app.use(router)
app.use(error)

app.listen(process.env.PORT? process.env.PORT : 3500, ()=>{
  console.log(`Server listening in port: ${process.env.PORT? process.env.PORT : 3500}`)
})