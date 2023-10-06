const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
  {
    bus_name: {
      type: String,
      trim: true,
    },
    bus_number: {
      type: String,
      trim: true,
    },
    bus_pickup: {
      type: String,
      trim: true,
    },
    bus_destination: {
      type: String,
      trim: true,
    },
    bus_time: {
      type: Number,
      default: 1,
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

const Bus = mongoose.model("bus", busSchema);
module.exports = Bus;
