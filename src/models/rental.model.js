const mongoose = require("mongoose");

const rental_Schema = new mongoose.Schema(
    {
        rental_item:{
            type:String,
            trim:true
        },
        rental_price:{
            type:Number,
            default:200
        },
        rental_duration:{
            type:String,
            trim:true
        },
        rental_location:{
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

const rental = mongoose.model("Rental",rental_Schema);
module.exports = rental