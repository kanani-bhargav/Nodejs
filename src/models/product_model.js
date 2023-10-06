const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      trim: true,
    },
    product_desc: {
      type: String,
      trim: true,
    },
    produect_price: {
      type: Number,
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

const product = mongoose.model("product", productSchema);
module.exports = product;
