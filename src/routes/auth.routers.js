import { Router } from "express";
import {login, register} from  '../controllers/auth.controller.js'


const router = Router()

//Peticiones

router.post('/register', register)

router.post('/login', login)


export default router
