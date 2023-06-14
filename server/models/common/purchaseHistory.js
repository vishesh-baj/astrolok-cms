const mongoose = require("mongoose");
const AstrologerModel = require("../Astrologers/AstrologerModel");
const Usermodel = require("../users/Usermodel");
const courses = require("./courses");
const AstrologerConsultation = require("../Astrologers/AstrologerConsultation");

const purchaseHistory = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: Usermodel,
        require: true,
    },
    astrologerId:{
        type: mongoose.Schema.Types.ObjectId, ref: AstrologerModel,
        default:null,
    },
    Amount:{
        type:Number,
        require:true,
        default:null,
        min:0
    },
    adminShare:{
        type:Number,
        default:null,
        min:0
    },
    astrologerShare:{
        type:Number,
        default:null,
        min:0
    },

    courseId:{
         type: mongoose.Schema.Types.ObjectId, 
         ref: courses,
        default:null,
    },
    consultationId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: AstrologerConsultation,
       default:null,
    },
    modeOfTransaction:{
        type:String,
        default:null,
    },
    amountType:{
        type:String,
        default:null,
    },
    dateOfTransaction:{
        type:String,
        default:null,
    },
    status:{
        type:String,
        default:null,
    },
    transactionId:{
        type:String,
        require:true,
        unique:true,
        default:null,
    }



}, { timestamps: true })
module.exports = mongoose.model("purchaseHistory", purchaseHistory);

// remeber to have wallet id here