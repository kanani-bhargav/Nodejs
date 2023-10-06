const mongoose = require("mongoose");

const sport_event_Schema = new mongoose.Schema(
    {
        sport_event_name:{
            type:String,
            trim:true
        },
        sport_event_desc:{
            type:String,
            trim:true
        },
        sport_event_duration:{
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

const sport_event = mongoose.model("Sports_event",sport_event_Schema);
module.exports = sport_event