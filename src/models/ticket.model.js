const mongoose = require("mongoose");

const ticket_Schema = new mongoose.Schema(
    {
        ticket_number:{
            type:String,
            trim:true
        },
        event_name:{
            type:mongoose.Types.ObjectId,
            ref:"Event"
        },
        ticket_holder:{
            type:String,
            trim:true
        },
        ticket_price:{
            type:Number,
            default:50
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

const ticket = mongoose.model("Ticket",ticket_Schema);
module.exports = ticket