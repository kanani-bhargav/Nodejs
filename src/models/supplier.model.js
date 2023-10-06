const mongoose = require("mongoose");

const supplier_Schema = new mongoose.Schema(
    {
        supplier_name:{
            type:String,
            trim:true
        },
        supplier_contact:{
            type:String,
            trim:true
        },
        supplier_address:{
            type:String,
            trim:true
        },
        supplies:{
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

const supplier = mongoose.model("Supplier",supplier_Schema);
module.exports = supplier