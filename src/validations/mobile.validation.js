const Joi = require("joi");

/** create createMobile */
const createMobile = {
  body: Joi.object().keys({
    mobile_name: Joi.string().required().trim(),
    mobile_desc: Joi.string().required().trim(),
    mobile_shop_location: Joi.string().required().trim(),
    mobile_price: Joi.number().required().integer(),
  }),
};

/** GEt Mobile list */
const getMobileList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Mobile details by id */
const getMobileDetails = {
  params: Joi.object().keys({
    mobileId: Joi.string().required().trim(),
  }),
};

/** user details update by id */
const updateMobileDetails={
  params:Joi.object().keys({
    mobileId:Joi.string().required().trim()
  }),
  body: Joi.object().keys({
    mobile_name: Joi.string().required().trim(),
    mobile_desc: Joi.string().required().trim(),
    mobile_shop_location: Joi.string().required().trim(),
    mobile_price: Joi.number().required().integer(),
  }),
}

module.exports = {
    createMobile,
    getMobileList,
    getMobileDetails,
    updateMobileDetails
};
