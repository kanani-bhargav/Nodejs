const mongoose = require("mongoose");

const crypto_faq_Schema = new mongoose.Schema(
    {
        crypto_faq_name:{
            type:String,
            trim:true
        },
        crypto_faq_desc:{
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

const crypto_faq = mongoose.model("Crypto_faq",crypto_faq_Schema);
module.exports = crypto_faq