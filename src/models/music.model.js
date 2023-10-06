const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema(
  {
    music_title: {
      type: String,
      trim: true,
    },
    music_publisher: {
      type: String,
      trim: true,
    },
    music_artist: {
      type: String,
      trim: true,
    },
    music_released: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Music = mongoose.model("music", musicSchema);
module.exports = Music;
