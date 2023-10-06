const mongoose = require("mongoose");

const review_Schema = new mongoose.Schema(
    {
        review_topic:{
            type:String,
            trim:true
        },
        review_desc:{
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

const review = mongoose.model("Review",review_Schema);
module.exports = review