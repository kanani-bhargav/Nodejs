const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema(
  {
    pharmacy_name: {
      type: String,
      trim: true,
    },
    pharmacy_location: {
      type: String,
      trim: true,
    },
    medicine_name: {
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

const Pharmacy = mongoose.model("pharmacy", pharmacySchema);
module.exports = Pharmacy;
