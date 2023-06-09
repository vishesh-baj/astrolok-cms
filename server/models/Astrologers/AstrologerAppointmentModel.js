const mongoose = require("mongoose")
const { appointments } = require("../../controllers/admin");
const AstrologerModel = require("./AstrologerModel");

const AstroAppointmentsSchema = new mongoose.Schema({
    
    astrologerdetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: AstrologerModel// use the model name as a string for the ref option
    },
    userDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Usermodel // use the model name as a string for the ref option
    },
    type:[{
      type:String
    }],
   
})

module.exports  = mongoose.model("AppointmentsSchema",AstroAppointmentsSchema);
