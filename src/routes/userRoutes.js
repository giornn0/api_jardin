const express = require("express");
const {PrismaClient, Prisma} = require("@prisma/client")

const prisma = new PrismaClient();
const router = express();
// Middlewares
/* import {authLogin,authRegister,authUsers} from '../middlewares'; */

//REGISTER FORM
router.get("/register", registerUser);

// PROCESS REGISTER
router.post("/register", registerUser);

// Login
router.get("/login",loginUser);

// PROCESS LOGIN 
router.post('/login',processLogin);

//LOGOUT
router.get('/logout/',logout);

/// EDIT USER
router.get("/edit/:id", editUser);
router.put("/edit/:id", editUser);

// DELETE USER

router.delete('/delete/:id',deleteUser)

export default router;
