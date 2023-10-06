const mongoose = require("mongoose");

const subChildCategorySchema = new mongoose.Schema(
  {
    sub_child_category_name:{
        type:String,
        trim:true
    },
    sub_child_category_description:{
        type:String,
        trim:true
    },
    sub_category:{
        type:mongoose.Types.ObjectId,
        ref:"sub_category"
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:"category"
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
const SubChildCategory = mongoose.model("sub_child_category", subChildCategorySchema);
module.exports = SubChildCategory;
