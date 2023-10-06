const Joi = require("joi");

/** create createGrocery */
const createGrocery = {
  body: Joi.object().keys({
    groceryShop_name: Joi.string().required().trim(),
    groceryShop_location: Joi.string().required().trim(),
    grocery_item: Joi.string().required().trim(),
  }),
};

/** GEt Grocery list */
const getGroceryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Grocery details by id */
const getGroceryDetails = {
  params: Joi.object().keys({
    groceryId: Joi.string().required().trim(),
  }),
};

/**grocery details update by id */
const updateGroceryDetails={
  params:Joi.object().keys({
    groceryId:Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    groceryShop_name: Joi.string().required().trim(),
    groceryShop_location: Joi.string().required().trim(),
    grocery_item: Joi.string().required().trim(),
  }),
}


module.exports = {
  createGrocery,
  getGroceryList,
  getGroceryDetails,
  updateGroceryDetails
};
