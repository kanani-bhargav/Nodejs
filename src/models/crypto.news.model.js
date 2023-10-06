const mongoose = require("mongoose");

const crypto_news_Schema = new mongoose.Schema(
    {
        crypto_news_name:{
            type:String,
            trim:true
        },
        crypto_news_desc:{
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

const crypto_news = mongoose.model("Crypto_news",crypto_news_Schema);
module.exports = crypto_news