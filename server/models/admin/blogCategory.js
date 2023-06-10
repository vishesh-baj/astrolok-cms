const mongoose = require("mongoose");
const blogCategory = new mongoose.Schema({
   name:{
      type:String,
      require:true,
   },
   status:{
      type:Boolean,
      default:true,
   },

},
{ timestamps: true }
)
module.exports  = mongoose.model("blogCategory",blogCategory);
