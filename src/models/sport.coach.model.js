const mongoose = require("mongoose");

const sport_coach_Schema = new mongoose.Schema(
    {
        sport_coach_name:{
            type:String,
            trim:true
        },
        sport_coach_desc:{
            type:String,
            trim:true
        },
        sport:{
            type: mongoose.Types.ObjectId,
            ref:"Sport_name"
        },
        sport_team:{
            type: mongoose.Types.ObjectId,
            ref:"Sports_team"
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

const sport_coach = mongoose.model("Sports_coach",sport_coach_Schema);
module.exports = sport_coach