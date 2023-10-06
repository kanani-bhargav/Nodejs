const Joi = require("joi");

/** create createCategory */
const createCategory = {
  body: Joi.object().keys({
    category_name: Joi.string().required().trim(),
    category_desc: Joi.string().required().trim(),
  }),
};

/** GEt Category list */
const getCategoryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Category details by id */
const getCategoryDetails = {
  params: Joi.object().keys({
    categoryId: Joi.string().required().trim(),
  }),
};

/**category details update by id */
const updateCategoryDetails={
  params:Joi.object().keys({
    categoryId:Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    category_name: Joi.string().required().trim(),
    category_desc: Joi.string().required().trim(),
  }),
}


module.exports = {
  createCategory,
  getCategoryList,
  getCategoryDetails,
  updateCategoryDetails
};
