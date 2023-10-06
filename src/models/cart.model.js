const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:"product"
    },
    cart_quantity:{
        type:Number,
        default:0
    },
    is_active:{
        type:Boolean,
        default:true
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
