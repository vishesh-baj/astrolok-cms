const mongoose = require("mongoose");
const AstrologerModel = require("../Astrologers/AstrologerModel");
const Usermodel = require("./Usermodel");

const ratingReview = mongoose.Schema({

    // here user is giving rating to astrologer we are not creating an array of obj as if astrologer has 1000ratings and we need to see only one then it be fetching us all
    
    astrologerdetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: AstrologerModel // use the model name as a string for the ref option
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: Usermodel,
    },
    rating:{
        type:Number,
        require:true,
        min:0,
        max:0,
    },
    review:{
        type:String,
    }


}, { timestamps: true })
module.exports = mongoose.model("ratingReview", ratingReview);
