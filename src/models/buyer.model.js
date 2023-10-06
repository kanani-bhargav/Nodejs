const mongoose = require("mongoose");

const buyer_Schema = new mongoose.Schema(
    {
        buyer_name:{
            type:String,
            trim:true
        },
        buyer_contact:{
            type:String,
            trim:true
        },
        buyer_address:{
            type:String,
            trim:true
        },
        items:{
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

const buyer = mongoose.model("Buyer",buyer_Schema);
module.exports = buyer