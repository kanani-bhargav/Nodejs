const mongoose = require("mongoose");
// Creating schema
const blog_Schema = new mongoose.Schema(
    {
        blog_title:{
            type:String,
            trim:true
        },
        blog_desc:{
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
// Creating model
const blog = mongoose.model("Blog",blog_Schema);
// Exporting model
module.exports = blog