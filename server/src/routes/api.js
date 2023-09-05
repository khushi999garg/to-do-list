import express from"express";
import Register from "../controllers/register.controller.js";
import { RegisterSchema } from "../validationSchema/registerSchema.js";
import Login from "../controllers/login.controller.js";
import { LoginSchema } from "../validationSchema/loginSchema.js";
import { createTodo } from "../controllers/todo.controller.js";
import { check } from "express-validator";

const route = express.Router();
export const apiProtected = express.Router();

route.post('/register', RegisterSchema, Register);
route.post('/login', LoginSchema, Login);

//protected routes

apiProtected.post('/createTodo', [check("desc", "Todo desc is required").exists()],createTodo);

export default route;