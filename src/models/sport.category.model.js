const mongoose = require("mongoose");

const sport_category_Schema = new mongoose.Schema(
    {
        sport_category_name:{
            type:String,
            trim:true
        },
        sport_category_desc:{
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

const sport_category = mongoose.model("Sports_category",sport_category_Schema);
module.exports = sport_category