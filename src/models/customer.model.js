const mongoose = require("mongoose");

const customer_Schema = new mongoose.Schema(
    {
        customer_name:{
            type:String,
            trim:true
        },
        customer_code:{
            type:String,
            trim:true
        },
        customer_email:{
            type:String,
            trim:true
        },
        customer_address:{
            type:String,
            trim:true
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

const customer = mongoose.model("Customer",customer_Schema);
module.exports = customer