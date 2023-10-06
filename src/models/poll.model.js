const mongoose = require("mongoose");

const poll_Schema = new mongoose.Schema(
    {
        poll_question:{
            type:String,
            trim:true
        },
        poll_options:{
            type:String,
            trim:true
        },
        poll_votes:{
            type:String,
            trim:true
        },
        poll_expiration:{
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

const poll = mongoose.model("Poll",poll_Schema);
module.exports = poll