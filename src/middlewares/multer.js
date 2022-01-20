import multer from "multer"
import fs from "fs"
import path from "path"



const storage = multer.diskStorage({   
  destination: function(req, file, cb) {
    fs.mkdirSync(`./public/colegios/${req.user.id}/`,{recursive:true})
    cb(null, `./public/colegios/${req.user.id}`);    
  }, 
  filename: function (req, file, cb) { 
     cb(null , `profile${path.extname(file.originalname)}`);   
  }
});

export const upload = multer({storage})