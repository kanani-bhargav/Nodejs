const mongoose = require("mongoose");

const recipe_Schema = new mongoose.Schema(
    {
        recipe_name:{
            type:String,
            trim:true
        },
        ingredients:{
            type:String,
            trim:true
        },
        instructions:{
            type:String,
            trim:true
        },
        cooking_time:{
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

const recipe = mongoose.model("Recipe",recipe_Schema);
module.exports = recipe