const mongoose = require("mongoose");
const config=require('../config/config')

const sportTrainingSchema = new mongoose.Schema(
    {
        trainer:{
            type:String,
            trim:true
        },
        trainer_image:{
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
              if (data?.trainer_image) {
                data.trainer_image = `${config.base_url}/trainer_image/${data.trainer_image}`;
              }
            }
        }
    }
)

const SportTraining = mongoose.model("SportTraining",sportTrainingSchema);
module.exports = SportTraining