import { Router } from "express";
const router = Router();

// BUSCAR TODO LOS COLEGIOS

router.get("/allcolegios", getAllColegios);

// Creacion DE COLEGIOS

router.post("/createcolegio", createCoelgio);

// EDITAR COLEGIO
/* router.get("/editcolegio/:id", editColegio); */
router.put("/editcolegio/:id", editColegio);

//ELIMINAR COLEGIO
router.delete("/deletecolegio", deleteColegio);
