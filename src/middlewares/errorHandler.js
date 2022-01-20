export default (err,req,res,next)=>{
  const statusCode = err.statusCode | 500;
  try {
    const {statusCode,message} = JSON.parse(err.message)
    console.log(statusCode, message);
    res.status(statusCode).json({message});
  } catch (error) {
<<<<<<< HEAD
    console.log(statusCode, error.message);
=======
    console.log(statusCode, err.message);
>>>>>>> a88bdad4694a9607cad4c46d81449a68ab34b819
    res.status(statusCode).json({message:err.message});
  }
}

(req,res,next)=>{
  const upload = multer({dest:'uploads/'}).single("demo_image");
  
}