const mongoose = require("mongoose");
const AstrologerModel = require("../Astrologers/AstrologerModel");

const purchaseHistory = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: Usermodel,
        require: true,
    },
    purchaseMade:[{
        purschaseId:mongoose.Types.ObjectId,
        productId:mongoose.Types.ObjectId,
        amountOfPurchase:String,
        astrologerdetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: AstrologerModel // use the model name as a string for the ref option
        },
    }]

}, { timestamps: true })
module.exports = mongoose.model("purchaseHistory", purchaseHistory);
