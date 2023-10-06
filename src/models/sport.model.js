const mongoose = require("mongoose");
const config=require('../config/config')

const sportNameSchema = new mongoose.Schema(
    {
        sport_name:{
            type:String,
            trim:true
        },
        sport_desc:{
            type:String,
            trim:true
        },
        sport_image:{
            type:String,
            trim:true
        },
        sport_origin:{
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
        versionKey:false,
        toJSON: {
            transform: function (doc, data) {
              if (data?.sport_image) {
                data.sport_image = `${config.base_url}/sport_image${data.sport_image}`;
              }
            }
        }
    }
)

const SportName = mongoose.model("SportName",sportNameSchema);
module.exports = SportName