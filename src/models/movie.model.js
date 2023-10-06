const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    movie_title: {
      type: String,
      trim: true,
    },
    movie_duration: {
      type: Number,
      default: 1,
    },
    movie_imdbRating: {
      type: Number,
      default: 0,
    },
    movie_released: {
      type: String,
      trim: true,
    },
    movie_language: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Movie = mongoose.model("movie", movieSchema);
module.exports = Movie;
