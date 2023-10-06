const Joi = require("joi");

/** create createTravel */
const createTravel = {
  body: Joi.object().keys({
    travelAgency_name: Joi.string().required().trim(),
    package_place: Joi.string().required().trim(),
    package_price: Joi.number().integer().required(),
  }),
};

/** GEt Travel list */
const getTravelList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Travel details by id */
const getTravelDetails = {
  params: Joi.object().keys({
   travelId: Joi.string().required().trim(),
  }),
};

/**travel details update by id */
const updateTravelDetails={
  params:Joi.object().keys({
    travelId:Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    travelAgency_name: Joi.string().required().trim(),
    package_place: Joi.string().required().trim(),
    package_price: Joi.number().integer().required(),
  }),
}

module.exports = {
  createTravel,
  getTravelList,
  getTravelDetails,
  updateTravelDetails
};
