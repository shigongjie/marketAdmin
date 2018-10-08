const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost/marketAdmin');
const userSchema=new mongoose.Schema({
	username:String,
	password:String,
});



const User=mongoose.model("user",userSchema);
module.exports={User};