const mongoose = require("mongoose");

const sport_name_Schema = new mongoose.Schema(
    {
        sport_name:{
            type:String,
            trim:true
        },
        sport_desc:{
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

const sport_name = mongoose.model("Sport_name",sport_name_Schema);
module.exports = sport_name