
const Joi = require("joi");

/** create sportOpinion */
const createSportOpinion = {
  body: Joi.object().keys({
    sport_celebrity: Joi.string().required().trim(),
    sport_celebrity_image: Joi.string().allow().trim(),
    sport_celebrity_position: Joi.string().required().trim(),
    sport_celebrity_background: Joi.string().required().trim(),
    sport_celebrity_quote: Joi.string().required().trim(),
  }),
};

/** GEt sportOpinion list */
const getSportOpinionList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

/** Get sportOpinion details by id */
const getDetails = {
  params: Joi.object().keys({
    sportOpinionId: Joi.string().required().trim(),
  }),
};

/** sportOpinion details update by id */
const updateSportOpinion = {
  params: Joi.object().keys({
    sportOpinionId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    sport_celebrity: Joi.string().trim(),
    sport_celebrity_image: Joi.string().trim(),
    sport_celebrity_position: Joi.string().trim(),
    sport_celebrity_background: Joi.string().trim(),
    sport_celebrity_quote: Joi.string().trim(),
  }),
};


module.exports = {
  createSportOpinion,
  getDetails,
  getSportOpinionList,
  updateSportOpinion,
};