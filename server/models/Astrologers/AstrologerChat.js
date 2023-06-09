const mongoose = require("mongoose");
const Usermodel = require("../users/Usermodel");
const AstrologerModel = require("./AstrologerModel");
const AstrologerCalls = new mongoose.Schema({
     
     astrologerdetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: AstrologerModel // use the model name as a string for the ref option
    },
     userDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Usermodel // use the model name as a string for the ref option
    },
       
   chat:{
    type:String,
    secure_url:String,
   }

},
{ timestamps: true }
)
module.exports  = mongoose.model("AstrologerCalls",AstrologerCalls);
