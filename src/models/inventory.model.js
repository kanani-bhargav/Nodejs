const mongoose = require("mongoose");

const inventory_Schema = new mongoose.Schema(
    {
        item_name:{
            type:String,
            trim:true
        },
        item_desc:{
            type:String,
            trim:true
        },
        item_quantity:{
            type:Number,
            trim:1
        },
        item_price:{
            type:Number,
            default:0
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

const inventory = mongoose.model("Inventory",inventory_Schema);
module.exports = inventory