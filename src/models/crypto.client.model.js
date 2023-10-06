const mongoose = require("mongoose");

const crypto_client_Schema = new mongoose.Schema(
    {
        crypto_client_name:{
            type:String,
            trim:true
        },
        crypto_client_desc:{
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

const crypto_client = mongoose.model("Crypto_client",crypto_client_Schema);
module.exports = crypto_client