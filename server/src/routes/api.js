import express from"express";
import Register from "../controllers/register.controller.js";
import { RegisterSchema } from "../validationSchema/registerSchema.js";
import Login from "../controllers/login.controller.js";
import { LoginSchema } from "../validationSchema/loginSchema.js";
import { createTodo } from "../controllers/todo.controller.js";

const route = express.Router();
export const apiProtected = express.Router();

route.post('/register', RegisterSchema, Register);
route.post('/login', LoginSchema, Login);

//protected routes

apiProtected.post('/createTodo', createTodo);

export default route;