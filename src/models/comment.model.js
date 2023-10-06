const mongoose = require("mongoose");

const comment_Schema = new mongoose.Schema(
    {
        comment_topic:{
            type:String,
            trim:true
        },
        comment_desc:{
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

const comment = mongoose.model("Comment",comment_Schema);
module.exports = comment