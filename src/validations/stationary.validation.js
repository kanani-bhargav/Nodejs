const Joi = require("joi");

/** create createStationary */
const createStationary = {
  body: Joi.object().keys({
    stationary_name: Joi.string().required().trim(),
    stationary_location: Joi.string().required().trim(),
    stationary_item: Joi.string().required().trim(),
  }),
};

/** GEt Stationary list */
const getStationaryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Stationary details by id */
const getStationaryDetails = {
  params: Joi.object().keys({
    stationaryId: Joi.string().required().trim(),
  }),
};

/**stationary details update by id */
const updateStationaryDetails={
  params:Joi.object().keys({
    stationaryId:Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    stationary_name: Joi.string().required().trim(),
    stationary_location: Joi.string().required().trim(),
    stationary_item: Joi.string().required().trim(),
  }),
}

module.exports = {
  createStationary,
  getStationaryList,
  getStationaryDetails,
  updateStationaryDetails
};
