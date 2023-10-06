const config=require('../config/config')
const mongoose = require("mongoose");

const sportOpinionSchema = new mongoose.Schema(
  {
    sport_celebrity: {
      type: String,
      trim: true,
    },
    sport_celebrity_image: {
      type: String,
      trim: true,
    },
    sport_celebrity_position: {
      type: String,
      trim: true,
    },
    sport_celebrity_background: {
      type: String,
      trim: true,
    },
    sport_celebrity_quote: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, data) {
        if (data?.sport_celebrity_image) {
          data.sport_celebrity_image = `${config.base_url}/sport_celebrity_image/${data.sport_celebrity_image}`;
        }
      },
    },
  }
);

const SportOpinion = mongoose.model("SportOpinion", sportOpinionSchema);
module.exports = SportOpinion;
