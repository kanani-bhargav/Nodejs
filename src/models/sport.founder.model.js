const mongoose = require("mongoose");

const sport_founder_Schema = new mongoose.Schema(
    {
        sport_founder_name:{
            type:String,
            trim:true
        },
        sport_founder_desc:{
            type:String,
            trim:true
        },
        sport:{
            type: mongoose.Types.ObjectId,
            ref:"Sport_name"
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

const sport_founder = mongoose.model("Sports_founder",sport_founder_Schema);
module.exports = sport_founder