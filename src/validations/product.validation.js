const Joi = require("joi");

/** create createProduct */
const createProduct = {
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    product_desc: Joi.string().required().trim(),
    product_price: Joi.number().required().integer(),
  }),
};

/** GEt Product list */
const getProductList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Product details by id */
const getProductDetails = {
  params: Joi.object().keys({
    productId: Joi.string().required().trim(),
  }),
};

/**product details update by id */
const updateProductDetails={
  params:Joi.object().keys({
    productId:Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    product_desc: Joi.string().required().trim(),
    produect_price: Joi.number().required().integer(),
  }),
}


module.exports = {
  createProduct,
  getProductList,
  getProductDetails,
  updateProductDetails
};
