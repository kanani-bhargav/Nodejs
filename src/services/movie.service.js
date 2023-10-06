const { Movie } = require("../models");

/**
 * Create Movie
 * @param {object} reqBody
 * @returns {Promise<Movie>}
 */
const createMovie = async (reqBody) => {
  return Movie.create(reqBody);
};

/**
 * Get Movie list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Movie>}
 */
const getMovieList = async (filter, options) => {
  // return Movie.find()
  return Movie.find({ $or: [ {movie_imdbRating:8}] })
};

/**
 * Delete Movie
 * @param {ObjectId} MovieId
 * @returns {Promise<Movie>}
 */
const deleteMovie = async (MovieId) => {
  return Movie.findByIdAndDelete(MovieId);
};

/**
 * movie details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<Movie>}
 */

const updateMovieDetails=async (movieId,updateBody)=>{
  return  Movie.findByIdAndUpdate(movieId,{$set:updateBody})
}

module.exports = {
    createMovie,
    getMovieList,
    deleteMovie,
    updateMovieDetails
};
