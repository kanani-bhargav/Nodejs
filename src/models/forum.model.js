const mongoose = require("mongoose");

const forum_Schema = new mongoose.Schema(
    {
        forum_topic:{
            type:String,
            trim:true
        },
        forum_author:{
            type:String,
            trim:true
        },
        forum_content:{
            type:String,
            trim:true
        },
        forum_timestamp:{
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

const forum = mongoose.model("Forum",forum_Schema);
module.exports = forum