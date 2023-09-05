import { JWT_TOKEN_SECRET, StatusCode } from "../utils/constants.js";
import { jsonGenerate } from "../utils/helpers.js";
import Jwt from "jsonwebtoken";

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

const AuthMiddleware =  (req, res, next) => {
    try {
        if(req.headers['auth'] === undefined){
            return res.json(jsonGenerate(StatusCode.AUTH_ERROR, "Access denied"))
        }

        const token = req.headers['auth'];

        try{
            const decoded = Jwt.verify(token, JWT_TOKEN_SECRET);
            console.log(decoded);

            req.userId = decoded.userId;

            return next();
        } catch(err){
            return res.json(jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY, "Invalid Token"));
        }
    } catch(err){
        console.error("ERR>>>>>>", err);
    }
}

export default AuthMiddleware;