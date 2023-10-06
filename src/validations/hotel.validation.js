const Joi = require("joi");

/** create createHotel */
const createHotel = {
  body: Joi.object().keys({
    name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    room_no: Joi.string().required().trim(),
    start_date: Joi.string().required().trim(),
    end_date: Joi.string().required().trim(),
  }),
};

/** GEt Hotel list */
const getHotelList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Hotel details by id */
const getHotelDetails = {
  params: Joi.object().keys({
   hotelId: Joi.string().required().trim(),
  }),
};

/**hotel details update by id */
const updateHotelDetails={
  params:Joi.object().keys({
    hotelId:Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    room_no: Joi.string().required().trim(),
    start_date: Joi.string().required().trim(),
    end_date: Joi.string().required().trim(),
  }),
}


module.exports = {
  createHotel,
  getHotelList,
  getHotelDetails,
  updateHotelDetails
};
