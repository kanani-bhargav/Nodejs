const mongoose = require("mongoose");

const crypto_Schema = new mongoose.Schema(
    {
        crypto_name:{
            type:String,
            trim:true
        },
        crypto_desc:{
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

const crypto = mongoose.model("Crypto",crypto_Schema);
module.exports = crypto