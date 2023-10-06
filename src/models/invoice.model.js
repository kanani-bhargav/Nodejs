const mongoose = require("mongoose");

const invoice_Schema = new mongoose.Schema(
    {
        invoice_no:{
            type:String,
            trim:true
        },
        invoice_desc:{
            type:String,
            trim:true
        },
        invoice_date:{
            type:String,
            trim:true
        },
        invoice_total:{
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

const invoice = mongoose.model("Invoice",invoice_Schema);
module.exports = invoice