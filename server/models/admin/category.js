const mongoose = require("mongoose");
const category = new mongoose.Schema({
     categoryTypes:{
        type:Array
     }
},
{ timestamps: true }
)
module.exports  = mongoose.model("category",category);
