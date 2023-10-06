const mongoose = require("mongoose");

const survey_Schema = new mongoose.Schema(
    {
        survey_title:{
            type:String,
            trim:true
        },
        survey_questions:{
            type:Number,
            default:0
        },
        survey_responses:{
            type:Number,
            default:0
        },
        survey_participants:{
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

const survey = mongoose.model("Survey",survey_Schema);
module.exports = survey