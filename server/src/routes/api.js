import express from"express";
import Register from "../controllers/register.controller.js";
import { RegisterSchema } from "../validationSchema/registerSchema.js";
import Login from "../controllers/login.controller.js";
import { LoginSchema } from "../validationSchema/loginSchema.js";

const route = express.Router();

route.post('/register', RegisterSchema, Register);
route.post('/login', LoginSchema, Login);

export default route;