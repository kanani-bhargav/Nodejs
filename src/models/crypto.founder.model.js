const mongoose = require("mongoose");

const crypto_founder_Schema = new mongoose.Schema(
    {
        crypto_founder_name:{
            type:String,
            trim:true
        },
        crypto_founder_desc:{
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

const crypto_founder = mongoose.model("Crypto_founder",crypto_founder_Schema);
module.exports = crypto_founder