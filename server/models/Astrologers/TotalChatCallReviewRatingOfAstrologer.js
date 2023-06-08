const mongoose = require("mongoose");
const AstrologerAccountModel = require("./AstrologerAccountModel");
const Usermodel = require("../users/Usermodel");
const totalChatCallReviewRatingOfAstrologer = new mongoose.Schema({
    totalRatings: [{
        userdetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Usermodel // use the model name as a string for the ref option
        },
        rating:{
            type:Number,
            max:5,
            min:0,
            default:0
        }
    }],
    totalReviews: [{
        userdetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Usermodel // use the model name as a string for the ref option
        },
        review:{
            type:String,
            default:" "
        }
    }],
    totalChatHours:[{
        userdetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Usermodel // use the model name as a string for the ref option
        },
        chatHour:{
            type:Number,
        }
    }],
    totalCallHours:[{
        userdetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Usermodel // use the model name as a string for the ref option
        },
        callHour:{
            type:Number
        }
    }],
     Astrologerdetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: AstrologerAccountModel // use the model name as a string for the ref option
    }
},
{ timestamps: true }
)
module.exports  = mongoose.model("totalChatCallReviewRatingOfAstrologer",totalChatCallReviewRatingOfAstrologer);
