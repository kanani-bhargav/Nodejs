const mongoose = require("mongoose");

const sport_contact_Schema = new mongoose.Schema(
    {
        sport_contact_path:{
            type:String,
            trim:true
        },
        sport_contact_desc:{
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

const sport_contact = mongoose.model("Sports_contact",sport_contact_Schema);
module.exports = sport_contact