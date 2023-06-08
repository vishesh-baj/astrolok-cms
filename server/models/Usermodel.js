const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:2,
        max:25,
    },
    gender:{
        type:String,
        require:true,
    },
    birthTime:{
        type:String,
        require:true,
    },
    birthCountry:{
        type:String,
        require:true,
    },
    birthCity:{
        type:String,
        require:true,
    },

    birthDate:{
        type:String,
        require:true,
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
    role: {
        type: String,
        default: "user",
      },
},
{ timestamps: true }
);

module.exports  = mongoose.model("userData",UserSchema);
