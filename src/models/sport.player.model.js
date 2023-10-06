const mongoose = require("mongoose");

const sport_player_Schema = new mongoose.Schema(
    {
        sport_player_name:{
            type:String,
            trim:true
        },
        sport_player_desc:{
            type:String,
            trim:true
        },
        sport:{
            type: mongoose.Types.ObjectId,
            ref:"Sport_name"
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

const sport_player = mongoose.model("Sports_player",sport_player_Schema);
module.exports = sport_player