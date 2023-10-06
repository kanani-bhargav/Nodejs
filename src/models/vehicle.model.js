const mongoose = require("mongoose");

const vehicle_Schema = new mongoose.Schema(
    {
        vehicle_maker:{
            type:String,
            trim:true
        },
        vehicle_model:{
            type:String,
            trim:true
        },
        vehicle_year:{
            type:Number,
            default:2000
        },
        vehicle_registration:{
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

const vehicle = mongoose.model("Vehicle",vehicle_Schema);
module.exports = vehicle