const express=require("express");
const Residents = require("../models/residents.model");
const router=express.Router();

router.get("",async(req,res)=>{
    try{
        const residents=await Residents.find().lean().exec();
        res.status(200).send(residents)
    }catch(err){
        res.status(500).send(err.message)
    }
   
})
router.post("",async(req,res)=>{
    try{
        const resident=await Residents.create(req.body);
        res.send(resident)
    }catch(err){
        res.status(201).send(err.message)
    }
})
router.get("/:id",async(req,res)=>{
    try{
        //const resident=await Resident.findById(req.params.id).populate("flat").exec();
        res.send("resident")
    }catch(err){
        res.status(500).send(err.message)
    }
})
router.put("/:id",async(req,res)=>{
    try{
        //const resident=await Resident.findByIdAndUpdate(req.params.id,req.body,{new:true}).populate("flat").exec();
        res.send("resident")
    }catch(err){
        res.status(500).send(err.message)
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        //const resident=await Resident.findByIdAndDelete(req.params.id).populate("flat").exec();
        res.send("resident")
    }catch(err){
        res.status(500).send(err.message)
    }
})
module.exports=router;