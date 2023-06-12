const mongoose = require("mongoose");
const AstrologerPersonalDetailModel = require("./AstrologerPersonalDetailModel");

const availableTimingSchema = mongoose.Schema({
  astrologerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: AstrologerPersonalDetailModel // use the model name as a string for the ref option
},
  monday: {
    type:Boolean,
    require: true,
    default: false,
    startTime: { type: String, min: 0, max: 23, default:null }, // hour of the day
    endTime: { type: String, min: 0, max: 23, default:null }, // hour of the day
    breakOneStart: { type: String, min: 0, max: 23, default:null },
    breakOneEnd: { type: String, min: 0, max: 23, default:null },
    breakTwoStart: { type: String, min: 0, max: 23, default:null },
    breakTwoEnd: { type: String, min: 0, max: 23, default:null },
  },
  tuesday: {
    type:Boolean,
    require: true,
    default: false,
    startTime: { type: String, min: 0, max: 23, default:null }, // hour of the day
    endTime: { type: String, min: 0, max: 23, default:null }, // hour of the day
    breakOneStart: { type: String, min: 0, max: 23, default:null },
    breakOneEnd: { type: String, min: 0, max: 23, default:null },
    breakTwoStart: { type: String, min: 0, max: 23, default:null },
    breakTwoEnd: { type: String, min: 0, max: 23, default:null },
  },
  wednesday: {
    type:Boolean,
    require: true,
    default: false,
    startTime: { type: String, min: 0, max: 23, default:null }, // hour of the day
    endTime: { type: String, min: 0, max: 23, default:null }, // hour of the day
    breakIneStart: { type: String, min: 0, max: 23, default:null },
    breakOneEnd: { type: String, min: 0, max: 23, default:null },
    breakTwoStart: { type: String, min: 0, max: 23, default:null },
    breakTwoEnd: { type: String, min: 0, max: 23, default:null },
  },
  Thrusday: {
    type:Boolean,
    require: true,
    default: false,
    startTime: { type: String, min: 0, max: 23, default:null }, // hour of the day
    endTime: { type: String, min: 0, max: 23, default:null }, // hour of the day
    breakOneStart: { type: String, min: 0, max: 23, default:null },
    breakOneEnd: { type: String, min: 0, max: 23, default:null },
    breakTwoStart: { type: String, min: 0, max: 23, default:null },
    breakTwoEnd: { type: String, min: 0, max: 23, default:null },
  },
  friday: {
    type:Boolean,
    require: true,
    default: false,
    startTime: { type: String, min: 0, max: 23, default:null }, // hour of the day
    endTime: { type: String, min: 0, max: 23, default:null }, // hour of the day
    breakOneStart: { type: String, min: 0, max: 23, default:null },
    breakOneEnd: { type: String, min: 0, max: 23, default:null },
    breakTwoStart: { type: String, min: 0, max: 23, default:null },
    breakTwoEnd: { type: String, min: 0, max: 23, default:null },
  },
  saturday: {
    type:Boolean,
    require: true,
    default: false,
    startTime: { type: String, min: 0, max: 23, default:null }, // hour of the day
    endTime: { type: String, min: 0, max: 23, default:null }, // hour of the day
    breakOneStart: { type: String, min: 0, max: 23, default:null },
    breakOneEnd: { type: String, min: 0, max: 23, default:null },
    breakTwoStart: { type: String, min: 0, max: 23, default:null },
    breakTwoEnd: { type: String, min: 0, max: 23, default:null },
  },
  sunday: {
    type:Boolean,
    require: true,
    default: false,
    startTime: { type: String, min: 0, max: 23, default:null }, // hour of the day
    endTime: { type: String, min: 0, max: 23, default:null }, // hour of the day
    breakOneStart: { type: String, min: 0, max: 23, default:null },
    breakOneEnd: { type: String, min: 0, max: 23, default:null },
    breakTwoStart: { type: String, min: 0, max: 23, default:null },
    breakTwoEnd: { type: String, min: 0, max: 23, default:null },
  },
  // other fields as needed
});

module.exports = mongoose.model("AvailableTimingSchema", availableTimingSchema);
