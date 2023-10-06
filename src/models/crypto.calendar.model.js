const mongoose = require("mongoose");

const crypto_calendar_Schema = new mongoose.Schema(
    {
        crypto_calendar_name:{
            type:String,
            trim:true
        },
        crypto_calendar_desc:{
            type:String,
            trim:true
        },
        crypto:{
            type: mongoose.Types.ObjectId,
            ref:"Crypto"
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

const crypto_calendar = mongoose.model("Crypto_calendar",crypto_calendar_Schema);
module.exports = crypto_calendar