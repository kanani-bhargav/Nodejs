const mongoose = require("mongoose");

const crypto_link_Schema = new mongoose.Schema(
    {
        crypto_link_name:{
            type:String,
            trim:true
        },
        crypto_link_desc:{
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

const crypto_link = mongoose.model("Crypto_link",crypto_link_Schema);
module.exports = crypto_link