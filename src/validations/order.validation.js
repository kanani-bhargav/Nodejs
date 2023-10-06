const Joi = require("joi");

/** create createOrder */
const createOrder = {
  body: Joi.object().keys({
    cart: Joi.string().required().trim(),
    product: Joi.string().required().trim(),
    order_amount: Joi.number().required().integer(),
    order_quantity: Joi.number().required().integer(),
    order_status: Joi.string().required().trim(),
  }),
};

/** GEt Order list */
const getOrderList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Order details by id */
const getOrderDetails = {
  params: Joi.object().keys({
    orderId: Joi.string().required().trim(),
  }),
};

/**order details update by id */
const updateOrderDetails={
  params:Joi.object().keys({
    orderId:Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    order_amount: Joi.number().required().integer(),
    order_quantity: Joi.number().required().integer(),
    order_status: Joi.string().required().trim(),
  }),
}


module.exports = {
  createOrder,
  getOrderList,
  getOrderDetails,
  updateOrderDetails
};
