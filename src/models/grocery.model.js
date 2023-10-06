const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema(
  {
    groceryShop_name: {
      type: String,
      trim: true,
    },
    groceryShop_location: {
      type: String,
      trim: true,
    },
    grocery_item: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Grocery = mongoose.model("grocery", grocerySchema);
module.exports = Grocery;
