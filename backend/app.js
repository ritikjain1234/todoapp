const express = require("express");
const connectDb = require("./db/conn");
const app = express();
const PORT = process.env.PORT||3000;
const router = require("./routers");
app.use(express.json());
app.use(router);
const start = ()=>{
    try {
        connectDb();
        app.listen(PORT,async(req,res)=>{
            console.log(`connect the server with port no:${PORT}`);
        });
    } catch (error){
        console.log(error);
    }
}
start();
