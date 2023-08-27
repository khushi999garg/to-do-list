import express from"express";
import Register from "../controllers/register.controller.js";

const route = express.Router();

route.post('/register', Register);

export default route;