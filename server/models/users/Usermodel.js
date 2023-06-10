const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 2,
      max: 25,
    },
    gender: {
      type: String,
    },
    birthTime: {
      type: String,
    },
    birthCountry: {
      type: String,
    },
    birthCity: {
      type: String,
    },

    birthDate: {
      type: String,
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
      required: true,
    },
    profilePicture: {
      id: String,
      secure_url: String,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("userData", UserSchema);
