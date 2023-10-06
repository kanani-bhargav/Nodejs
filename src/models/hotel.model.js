const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    room_no: {
      type: String,
      required: true,
      trim: true,
    },
    start_date: {
      type: String,
      required: true,
      trim: true,
    },
    end_date: {
      type: String,
      required: true,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Hotel = mongoose.model("hotel", hotelSchema);
module.exports = Hotel;
