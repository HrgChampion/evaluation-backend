const mongoose =require("mongoose");

const connect=()=>{
    mongoose.connect("mongodb+srv://himanshu:himanshu123@cluster0.ez7vk.mongodb.net/evaluationdb?retryWrites=true&w=majority");
}
module.exports = connect;