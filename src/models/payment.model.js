const mongoose = require("mongoose");

const payment_Schema = new mongoose.Schema(
    {
        payer:{
            type:String,
            trim:true
        },
        payer_contact:{
            type:String,
            trim:true
        },
        payment_date:{
            type:String,
            trim:true
        },
        payment_method:{
            type:String,
            trim:true
        },
        payment_amount:{
            type:Number,
            default:0
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

const payment = mongoose.model("Payment",payment_Schema);
module.exports = payment