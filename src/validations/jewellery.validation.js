const Joi = require("joi");

/** create createJewellery*/
const createJewellery= {
  body: Joi.object().keys({
    jewelleryShop_name: Joi.string().required().trim(),
    jewelleryShop_location: Joi.string().required().trim(),
    jewellery_item: Joi.string().required().trim(),
  }),
};

/** GEt Jewellerylist */
const getJewelleryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Jewellerydetails by id */
const getJewelleryDetails = {
  params: Joi.object().keys({
    jewelleryId: Joi.string().required().trim(),
  }),
};

/**jewellery details update by id */
const updateJewelleryDetails={
  params:Joi.object().keys({
    jewelleryId:Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    jewelleryShop_name: Joi.string().required().trim(),
    jewelleryShop_location: Joi.string().required().trim(),
    jewellery_item: Joi.string().required().trim(),
  }),
}


module.exports = {
  createJewellery,
  getJewelleryList,
  getJewelleryDetails,
  updateJewelleryDetails
};