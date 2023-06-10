const mongoose = require("mongoose");
const blogCategory = new mongoose.Schema({
     categoryTypes:{
        type:Array
     }
},
{ timestamps: true }
)
module.exports  = mongoose.model("blogCategory",blogCategory);
