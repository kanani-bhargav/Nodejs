const mongoose = require("mongoose");

const crypto_potential_Schema = new mongoose.Schema(
    {
        crypto_potential_name:{
            type:String,
            trim:true
        },
        crypto_potential_desc:{
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

const crypto_potential = mongoose.model("Crypto_potential",crypto_potential_Schema);
module.exports = crypto_potential