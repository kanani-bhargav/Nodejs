const express = require("express");
const { movieValidation } = require("../../validations");
const { movieController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create movie */
router.post(
  "/create-movie",
  validate(movieValidation.createMovie),
  movieController.createMovie
);

/** Get movie list */
router.get(
  "/list-movie",
  validate(movieValidation.getMovieList),
  movieController.getMovieList
);

/** Delete movie */
router.delete(
  "/delete-movie/:movieId",
  validate(movieValidation.getMovieDetails),
  movieController.deleteMovie
);

/**movie details update id */
router.put(
  "/update-movie/:movieId",
  validate(movieValidation.updateMovieDetails),
  movieController.updateMovieDetails
  )

module.exports = router;
