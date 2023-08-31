import express from"express";
import Register from "../controllers/register.controller.js";
import { RegisterSchema } from "../validationSchema/registerSchema.js";

const route = express.Router();

route.post('/register', RegisterSchema, Register);

export default route;