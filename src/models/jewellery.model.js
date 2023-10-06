const mongoose = require("mongoose");

const jewellerySchema = new mongoose.Schema(
  {
    jewelleryShop_name: {
      type: String,
      trim: true,
    },
    jewelleryShop_location: {
      type: String,
      trim: true,
    },
    jewellery_item: {
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

const Jewellery = mongoose.model("jewellery", jewellerySchema);
module.exports = Jewellery;
