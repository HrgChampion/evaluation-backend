const express=require("express");
const router=express.Router();
const Flats=require("../models/flats.model");


//Flats
router.get("",async(req,res)=>{
    try{
        const page = req.query.page || 1;
    const size = req.query.size || 3;
        const flats=await Flats.find().populate("Residents").skip((page - 1) * size).limit(size).lean().exec();
        const totalPages = Math.ceil(
            (await Flats.find().countDocuments()) / size
          );
        res.send({ flats, totalPages })
    }catch(err){
        res.status(500).send(err.message)
    }
   
})
//Filter By resident-type_
router.get("/:Resident_Type",async(req,res)=>{
    try{
        const page = req.query.page || 1;
    const size = req.query.size || 3;
        const flats=await Flats.find().populate("Residents").skip((page - 1) * size).limit(size).lean().exec();
        const finalflats= flats.filter((flat)=>flat.Resident_Type==req.params.Resident_Type);
        
        // const totalPages = Math.ceil(
        //     (await Flats.find(finalflats).countDocuments()) / size
        //   );
        //   console.log({totalPages})
        res.send(finalflats )
    }catch(err){
        res.status(500).send(err.message)
    }
   
})
//Get each flat by id
router.get("/flat/:_id" ,async(req,res)=>{
    
    try{
        const flat=await Flats.findById(req.params._id).populate("Residents").lean().exec();
        
        res.status(200).send(flat)
    }catch(err){
        res.status(500).send(err.message)
    }
})
router.get("/block/:Block",async(req,res)=>{
    console.log(1)
    try{
        const page = req.query.page || 1;
    const size = req.query.size || 3;
        const flats=await Flats.find().populate("Residents").skip((page - 1) * size).limit(size).lean().exec();
        const finalflats= flats.filter((flat)=>flat.Block==req.params.Block);
        console.log(finalflats)
        // const totalPages = Math.ceil(
        //     (await Flats.find(finalflats).countDocuments()) / size
        //   );
        //   console.log({totalPages})
        res.send(finalflats )
    }catch(err){
        res.status(500).send(err.message)
    }
   
})
//Sort By Ascending
router.get("/sort/asc",async(req,res)=>{
    try{
        const page = req.query.page || 1;
    const size = req.query.size || 3;
        const flats=await Flats.find().populate("Residents").skip((page - 1) * size).limit(size).lean().exec();
        const finalflats= flats.sort((a,b)=>a.Flat_No-b.Flat_No);
        const totalPages = Math.ceil(
            (await Flats.find().countDocuments()) / size
          );
        res.send({ finalflats, totalPages })
    }catch(err){
        res.status(500).send(err.message)
    }
   
})
// Sort by Descending
router.get("/sort/dsc",async(req,res)=>{
    try{
        const page = req.query.page || 1;
    const size = req.query.size || 3;
        const flats=await Flats.find().populate("Residents").skip((page - 1) * size).limit(size).lean().exec();
        const finalflats= flats.sort((a,b)=>b.Flat_No-a.Flat_No);
        const totalPages = Math.ceil(
            (await Flats.find().countDocuments()) / size
          );
        res.send({ finalflats, totalPages })
    }catch(err){
        res.status(500).send(err.message)
    }
   
})
//ADD FLAT
router.post("",async(req,res)=>{
    try{
        const flats=await Flats.create(req.body);
        res.status(201).send(flats)
    }catch(err){
        res.status(500).send(err.message)
    }
})



//Update
router.put("/:_id",async(req,res)=>{
    try{
        const flat=await Flats.findByIdAndUpdate(req.params._id,req.body,{new:true}).lean().exec();
        res.status(201).send(flat)
    }catch(err){
        res.status(500).send(err.message)
    }
})
//Delete
router.delete("/:id",async(req,res)=>{
    try{
        const flat=await Flats.findByIdAndDelete(req.params.id).lean().exec();
        res.send("resident")
    }catch(err){
        res.status(500).send(err.message)
    }
})
module.exports=router;