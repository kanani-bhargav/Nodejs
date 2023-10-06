const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema(
    {
        mobile_name : {
            type:String,
            trim:true
        },
        mobile_desc : {
            type:String,
            trim:true
        },
        mobile_shop_location:{
            type:String,
            trim:true
        },
        mobile_price : {
            type:Number,
            default:0
        },
        is_active : {
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const mobile = mongoose.model("mobile",mobileSchema);
module.exports = mobile;