const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema(
  {
    travelAgency_name: {
      type: String,
      trim: true,
    },
    package_place: {
      type: String,
      trim: true,
    },
    package_price: {
      type: Number,
      default: 0,
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

const Travel = mongoose.model("travel", travelSchema);
module.exports = Travel;
