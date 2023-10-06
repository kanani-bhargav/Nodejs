const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    order:{
        type:mongoose.Types.ObjectId,
        ref:"order"
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    payment_method:{
        type:String,
        trim:true
    },
    transaction_id:{
        type:String,
        trim:true
    },
    payment_status:{
        type:String,
        trim:true
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
const Payment = mongoose.model("payment", paymentSchema);
module.exports = Payment;
