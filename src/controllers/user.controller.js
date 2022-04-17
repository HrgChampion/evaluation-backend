const express=require("express");
const User=require("../models/user.model");
const {body,validationResult}=require("express-validator")

const router=express.Router();

router.get("",async(req,res)=>{
    try{
        const users=await User.find().lean().exec();
        res.status(200).send(users)
    }catch(err){
        res.status(500).send(err.message)
    }
})

router.post("",

body("email").isEmail().custom(async(value)=>{
    const user=await User.findOne({email:value});
    if(user){
        throw new Error("Email already exists");
    }
    return true;
}),
async(req,res)=>{
    try{
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user=await User.create(req.body)
    return res.status(201).send(user)
    }catch(err){
        res.status(500).send(err.message)
    }
})




module.exports=router;