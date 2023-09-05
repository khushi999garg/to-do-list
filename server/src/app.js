import express from "express";
import mongoose from "mongoose";
import route, { apiProtected } from "./routes/api.js";
import { DB_CONNECT } from "./utils/constants.js";
import AuthMiddleware from "./middlewares/AuthMiddleware.js";

const app = express();

const PORT = 8080;

// app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Home Page");
})

app.use('/api/', route);
app.use('/api/', AuthMiddleware, apiProtected);


const main = async () => {
    try{
        await mongoose.connect(DB_CONNECT, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        
        app.listen(PORT, ()=> {
            console.log(`server is running on http://localhost:${PORT}`)
        })
    } catch(err) {
        console.error("ERR>>>>>", err);
    }
}

main();