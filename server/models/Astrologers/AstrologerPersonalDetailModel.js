const mongoose = require("mongoose");
const AstrologerAccountModel = require("./AstrologerAccountModel");

const AstrologerPersonalDetailModelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 2,
      max: 25,
    },
    gender: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    mobile: {
      type: Number,
    },
    profilePicture: {
      id: String,
      secure_url: String,
    },
    nationalBookCharges: {
      type: Number,
      default: "0",
    },
    role: {
      type: String,
      default: "admin",
    },
    internationalBookCharges: {
      type: Number,
      default: "0",
    },
    experienceInYears: {
      type: Number,
    },
    organization: {
      type: String,
      require: true,
      default: "Asttrolok",
    },
    address: {
      type: String,
      require: true,
    },
    areaofInterest: [
      {
        type: String,
        require: true,
      },
    ],
    videoType: {
      type: String,
    },
    reviewVideoLink: {
      type: String,
    },
    // Astrologerdetails: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Astrologer" // use the model name as a string for the ref option
    // }
  },
  { timestamps: true }
);

// add the properties of AstrologerAccountModel to AstrologerSchema
AstrologerPersonalDetailModelSchema.add(AstrologerAccountModel.schema);

module.exports = mongoose.model("AstrologerPersonalDetailModelSchema", AstrologerPersonalDetailModelSchema);
