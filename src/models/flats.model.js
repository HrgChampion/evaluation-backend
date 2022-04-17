const monoose=require('mongoose');

const flatSchema=monoose.Schema({
   Block:{type:String,required:true},
   Flat_No:{type:String,required:true},
   Resident_Type:{type:String,required:true,default:"Owner"},
   Residents:{type:monoose.Schema.Types.ObjectId,ref:"Residents"},
   Image:{type:String},
   Total_Residents:{type:Number,default:0},
},{
    versionkey:false,
    timestamps:true
})
module.exports=monoose.model('Flats',flatSchema);



