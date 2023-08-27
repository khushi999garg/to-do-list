import express from "express";
import route from "./utils/api.js";

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Home Page");
})

app.use('/api/', route);

app.listen(PORT, ()=> {
    console.log(`server is running on http://localhost:${PORT}`)
})