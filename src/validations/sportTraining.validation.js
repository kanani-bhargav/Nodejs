
const Joi = require("joi");

/** create sportTraining */
const createSportTraining = {
  body: Joi.object().keys({
    trainer: Joi.string().required().trim(),
    trainer_image: Joi.string().allow().trim(),
  }),
};

/** GEt sportTraining list */
const getSportTrainingList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

/** Get sportTraining details by id */
const getDetails = {
  params: Joi.object().keys({
    sportTrainingId: Joi.string().required().trim(),
  }),
};

/** sportTraining details update by id */
const updateSportTraining = {
  params: Joi.object().keys({
    sportTrainingId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    trainer: Joi.string().trim(),
    trainer_image: Joi.string().trim(),
  }),
};


module.exports = {
  createSportTraining,
  getDetails,
  getSportTrainingList,
  updateSportTraining,
};