
const Joi = require("joi");

/** create sportName */
const createSportName = {
  body: Joi.object().keys({
    sport_name: Joi.string().required().trim(),
    sport_desc: Joi.string().required().trim(),
    sport_image: Joi.string().allow().trim(),
    sport_origin: Joi.string().required().trim(),
  }),
};

/** GEt sportName list */
const getSportNameList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

/** Get sportName details by id */
const getDetails = {
  params: Joi.object().keys({
    sportNameId: Joi.string().required().trim(),
  }),
};

/** sportName details update by id */
const updateSportName = {
  params: Joi.object().keys({
    sportNameId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    sport_name: Joi.string().trim(),
    sport_desc: Joi.string().trim(),
    sport_image: Joi.string().trim(),
    sport_origin: Joi.string().trim(),
  }),
};


module.exports = {
  createSportName,
  getDetails,
  getSportNameList,
  updateSportName,
};