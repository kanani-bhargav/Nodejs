const Joi = require("joi");

/** create createBus */
const createBus = {
  body: Joi.object().keys({
    bus_name: Joi.string().required().trim(),
    bus_number: Joi.string().required().trim(),
    bus_pickup: Joi.string().required().trim(),
    bus_destination: Joi.string().required().trim(),
    bus_time: Joi.number().integer().required(),
  }),
};

/** GEt Bus list */
const getBusList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Bus details by id */
const getBusDetails = {
  params: Joi.object().keys({
    busId: Joi.string().required().trim(),
  }),
};

/** user details update by id */
const updateBusDetails={
  params:Joi.object().keys({
    busId:Joi.string().required().trim()
  }),
  body:Joi.object().keys({
    bus_name: Joi.string().required().trim(),
    bus_number: Joi.string().required().trim(),
    bus_pickup: Joi.string().required().trim(),
    bus_destination: Joi.string().required().trim(),
    bus_time: Joi.number().integer().required(),
  })
}


module.exports = {
    createBus,
    getBusList,
    getBusDetails,
    updateBusDetails
};
