const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name:{
        type:String,
        trim:true
    },
    sub_child_category:{
        type:mongoose.Types.ObjectId,
        ref:"sub_child_category"
    },
    product_description:{
        type:String,
        trim:true
    },
    product_price:{
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
const Product = mongoose.model("product", productSchema);
module.exports = Product;
