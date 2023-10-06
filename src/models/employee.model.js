const mongoose = require("mongoose");

const employee_Schema = new mongoose.Schema(
    {
        employee_name:{
            type:String,
            trim:true
        },
        employee_email:{
            type:String,
            trim:true
        },
        employee_address:{
            type:String,
            trim:true
        },
        employee_department:{
            type:String,
            trim:true
        },
        employee_salary:{
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

const employee = mongoose.model("Employee",employee_Schema);
module.exports = employee