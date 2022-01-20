export default (err,req,res,next)=>{
  const statusCode = err.statusCode | 500;
  try {
    const {statusCode,message} = JSON.parse(err.message)
    console.log(statusCode, message);
    res.status(statusCode).json({message});
  } catch (error) {
    console.log(statusCode, error.message);
    res.status(statusCode).json({message:err.message});
  }
}