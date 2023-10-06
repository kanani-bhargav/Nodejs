const mongoose = require("mongoose");

// Create crypto founder
const crypto_type_Schema = new mongoose.Schema(
    {
        crypto_type_name:{
            type:String,
            trim:true
        },
        crypto_type_desc:{
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

const crypto_type = mongoose.model("Crypto_type",crypto_type_Schema);
module.exports = crypto_type