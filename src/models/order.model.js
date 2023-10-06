const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    cart:{
        type:mongoose.Types.ObjectId,
        ref:"cart"
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:"product"
    },
    order_amount:{
        type:Number,
        default:0
    },
    order_quantity:{
        type:Number,
        default:0
    },
    order_status:{
        type:String,
        trim:true
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Order = mongoose.model("order", orderSchema);
module.exports = Order;
