const Joi = require("joi");

/** create createCart */
const createCart = {
  body: Joi.object().keys({
    user: Joi.string().required().trim(),
    product: Joi.string().required().trim(),
    cart_quantity: Joi.number().required().integer(),
  }),
};

/** GEt Cart list */
const getCartList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Cart details by id */
const getCartDetails = {
  params: Joi.object().keys({
    cartId: Joi.string().required().trim(),
  }),
};

/**cart details update by id */
const updateCartDetails={
  params:Joi.object().keys({
    cartId:Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    cart_quantity: Joi.number().required().integer(),
  }),
}


module.exports = {
  createCart,
  getCartList,
  getCartDetails,
  updateCartDetails
};
