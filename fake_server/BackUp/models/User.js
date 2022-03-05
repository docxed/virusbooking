const mongoose = require("mongoose");

const UserSchama = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    pass: {
      type: String,
      required: true,
      min: 6,
    },
    fname: {
      type: String,
      required: true,
      max: 50,
    },
    lname: {
      type: String,
      required: true,
      max: 50,
    },
    idcard: {
      type: String,
      required: true,
      min: 13,
      max: 13,
    },
    lineid: {
      type: String,
      required: false,
      max: 50,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchama);
