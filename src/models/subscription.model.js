const mongoose = require("mongoose");

const subscription_Schema = new mongoose.Schema(
    {
        subscription_name:{
            type:String,
            trim:true
        },
        subscription_duration:{
            type:String,
            trim:true
        },
        subscription_features:{
            type:String,
            trim:true
        },
        subscription_price:{
            type:Number,
            default:50
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const subscription = mongoose.model("Subscription",subscription_Schema);
module.exports = subscription