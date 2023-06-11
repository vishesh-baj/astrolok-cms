const mongoose = require("mongoose");
const AstrologerModel = require("./AstrologerPersonalDetailModel");

const availableTimingSchema = mongoose.Schema({

    Day: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], require: true,default:"" },
    status:{
        type:Boolean,
        require:true,
        default:false,
    },
    startTime: { type: String, min: 0, max: 23, required: true }, // hour of the day
    endTime: { type: String, min: 0, max: 23, required: true }, // hour of the day
    lunchTimeIn: { type: String, min: 0, max: 23, required: true },
    lunchTimeOut: { type: String, min: 0, max: 23, required: true },
    teaTimeIn: { type: String, min: 0, max: 23, required: true },
    teaTimeOut: { type: String, min: 0, max: 23, required: true },
    bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: AstrologerModel }, // optional reference to the user who booked the slot
    // other fields as needed  
})

module.exports = mongoose.model("AvailableTimingSchema", availableTimingSchema);

