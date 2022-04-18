const express=require("express");
const connect=require("../src/config/db");
const app=express();
require("dotenv").config();
app.use(express.json());
const Cors=require("cors");
const port=process.env.PORT||2345;
const {register,login}=require("./controllers/auth.controller")
const flatsController=require("./controllers/flats.controller");
const residentController=require("./controllers/residents.controller");
const userController=require("./controllers/user.controller");
app.use(Cors());
app.post("/register",register);
app.post("/login",login);
app.use("/flats",flatsController);
app.use("/residents",residentController);
app.use("/users",userController);
app.listen(port,async function(){
    try{
    await connect();
        console.log("listening on port 2345")
    }catch(err){
        return res.status(500).send(err.message)
    }
})