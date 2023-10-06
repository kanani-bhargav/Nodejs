const mongoose = require("mongoose");

const event_Schema = new mongoose.Schema(
    {
        event_name:{
            type:String,
            trim:true
        },
        event_date:{
            type:String,
            trim:true
        },
        event_location:{
            type:String,
            trim:true
        },
        event_description:{
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

const event = mongoose.model("Event",event_Schema);
module.exports = event