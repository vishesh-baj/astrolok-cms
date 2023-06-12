const mongoose = require("mongoose")
const AstrologerModel = require("./AstrologerPersonalDetailModel")
const Usermodel = require("../users/Usermodel")

const AstrologerBookingSchema = mongoose.Schema(
  {
    astrologerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: AstrologerModel,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Usermodel,
      require: true,
    },
    bookingtype: {
      type: String,
      require: true,
    },
    bookingdate: {
      type: String,
      require: true,
    },
    bookingtime: {
      type: String,
      require: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    waitingTime: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model(
  "astrologerbookingschema",
  AstrologerBookingSchema
);
