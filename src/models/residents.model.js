const mongoose=require("mongoose");

const residentSchema=mongoose.Schema({
    Name:{type:String,required:true},
    age:{type:Number,required:true},
    Gender:{type:String,required:true,default:"Male"},
    Flat_No:{type:String,required:true},
    Flat_Owner:{type:String,required:true},
    Residents:[{type:String,required:true}],
},{
    versionkey:false,
    timestamps:true
})
module.exports=mongoose.model("Residents",residentSchema);


