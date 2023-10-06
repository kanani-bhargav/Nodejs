const mongoose = require("mongoose");

const stationarySchema = new mongoose.Schema(
  {
    stationary_name: {
      type: String,
      trim: true,
    },
    stationary_location: {
      type: String,
      trim: true,
    },
    stationary_item: {
      type: String,
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

const Stationary = mongoose.model("stationary", stationarySchema);
module.exports = Stationary;
