const mongoose = require("mongoose");
const AstrologerAccountModel = require("./AstrologerAccountModel");
const Usermodel = require("../users/Usermodel");
const BillGenerate = new mongoose.Schema({
     
     astrologerdetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: AstrologerAccountModel // use the model name as a string for the ref option
    },
     userDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Usermodel // use the model name as a string for the ref option
    },
       
    amount:{
        type:Number,
    },
    method:{
        type:"String"
    },

},
{ timestamps: true }
)
module.exports  = mongoose.model("billGenerate",BillGenerate);
