const Joi = require("joi");

/** create createMovie */
const createMovie = {
  body: Joi.object().keys({
    movie_title: Joi.string().required().trim(),
    movie_duration: Joi.number().integer().required(),
    movie_imdbRating: Joi.number().integer().required(),
    movie_released: Joi.string().required().trim(),
    movie_language: Joi.string().required().trim(),
  }),
};

/** GEt Movie list */
const getMovieList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Movie details by id */
const getMovieDetails = {
  params: Joi.object().keys({
   movieId: Joi.string().required().trim(),
  }),
};

/**movie details update by id */
const updateMovieDetails={
  params:Joi.object().keys({
    movieId:Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    movie_title: Joi.string().required().trim(),
    movie_duration: Joi.number().integer().required(),
    movie_imdbRating: Joi.number().integer().required(),
    movie_released: Joi.string().required().trim(),
    movie_language: Joi.string().required().trim(),
  }),
}


module.exports = {
  createMovie,
  getMovieList,
  getMovieDetails,
  updateMovieDetails
};
