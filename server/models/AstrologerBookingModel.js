const mongoose = require("mongoose")
const AstrologerModel = require("./AstrologerModel")
const Usermodel = require("./Usermodel")

const AstrologerBookingSchema =  mongoose.Schema({
    astrologerId:{
        type: mongoose.Schema.Types.ObjectId, ref: AstrologerModel,
    },
    bookingsId:[
        {
            userId:{
                type: mongoose.Schema.Types.ObjectId, ref: Usermodel,
                require:true,
            },
            date:{
                type:String,
                require:true,
            },
            time:{
                type:String,
                require:true,
            }
        }
    ]

},{ timestamps: true })
module.exports  = mongoose.model("astrologerbookingschema",AstrologerBookingSchema);
