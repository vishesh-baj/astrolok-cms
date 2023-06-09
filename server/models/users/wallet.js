const mongoose = require("mongoose")


const wallet = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: Usermodel,
        require: true,
    },
    amount:{
        type:String,
    }

}, { timestamps: true })
module.exports = mongoose.model("wallet", wallet);
