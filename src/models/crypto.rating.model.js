const mongoose = require("mongoose");

const crypto_rating_Schema = new mongoose.Schema(
    {
        crypto_rating_name:{
            type:String,
            trim:true
        },
        crypto_rating_desc:{
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

const crypto_rating = mongoose.model("Crypto_rating",crypto_rating_Schema);
module.exports = crypto_rating