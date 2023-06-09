const mongoose = require("mongoose");

const product = mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique: true,
    },
    price:{
        type:String,
        require:true,
    },
    imageURL:{
        type:String,
        require:true,
    },
    about:{
        type:String,
    },
    author:{
        type:String,
    },
    videoURL:{
        type:String,
    }
}, { timestamps: true })
module.exports = mongoose.model("product", product);
