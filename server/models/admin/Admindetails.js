const mongoose = require("mongoose");
const adminDetails = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:2,
        max:25,
    },
    gender:{
        type:String,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        min:6,
    },
    mobile:{
        type:Number,
    },
    profilePicture:{
        id:String,
        secure_url:String,
    },
    role:{
        type:String,
        default:"admin",
    },
   
},
{ timestamps: true }
);



module.exports  = mongoose.model("adminDetails",adminDetails);
