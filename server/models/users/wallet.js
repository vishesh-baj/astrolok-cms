const mongoose = require("mongoose");
const Usermodel = require("./Usermodel");
const WalletSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:Usermodel,
    },
    amount: {
        type:Number,
        default:0,
        min:0
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("WalletSchema", WalletSchema);
