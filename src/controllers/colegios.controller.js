import {erase,edit,getAll} from "../services/colegios.services.js"
//get all Colegios simple paginator
export const getAllColegios = async (req, res,next)=>{
  try {
    const result = await getAll(req.query)
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}
// crea un user 
export const createColegio = async (req, res,next)=> {
  try {
    const result = await create(req.body,req.user)
    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
}
//edita
export const editColegio =  async (req, res,next)=> {
  try {
    const result = await edit(req.body,req.params.id)
    res.status(202).json(result)
  } catch (error) {
    next(error)
  }
}
//elimina 
export const deleteColegio = async(req,res,next)=>{
  async (req, res,next)=> {
    try {
      const result = await erase(req.params.id)
      res.status(202).json(result)
    } catch (error) {
      next(error)
    }
  }
}
