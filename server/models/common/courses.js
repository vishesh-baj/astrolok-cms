const mongoose = require("mongoose");
const AstrologerModel = require("../Astrologers/AstrologerModel");
const Usermodel = require("../users/Usermodel");
const wallet = require("../users/wallet");

const courses = mongoose.Schema({

    courseId: {
        type: mongoose.Schema.Types.ObjectId, ref: Usermodel,
        require: true,
    },
    courseName:{
        type:String,
    },
    createdBy:{
        teacher:{
            astrologerId:{
                type: mongoose.Schema.Types.ObjectId, ref: AstrologerModel,
                default:null,
            },
        }
    },
    amount:{
        type:Number,
        require:true,
        default:null,
        min:0
    },
    uploadedLink:{
        type:String,
    },
    thumbnil:{
        type:String,
        
    }




}, { timestamps: true })
module.exports = mongoose.model("courses", courses);

// remeber to have wallet id here