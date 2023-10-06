const Joi = require("joi");

/** create createSubCategory */
const createSubCategory = {
  body: Joi.object().keys({
    sub_category_name: Joi.string().required().trim(),
    sub_category_description: Joi.string().required().trim(),
    category: Joi.string().required().trim(),
  }),
};

/** GEt SubCategory list */
const getSubCategoryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get SubCategory details by id */
const getSubCategoryDetails = {
  params: Joi.object().keys({
    subCategoryId: Joi.string().required().trim(),
  }),
};

/**category details update by id */
const updateSubCategoryDetails={
  params:Joi.object().keys({
    subCategoryId:Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    sub_category_name: Joi.string().required().trim(),
    sub_category_description: Joi.string().required().trim(),
  }),
}


module.exports = {
  createSubCategory,
  getSubCategoryList,
  getSubCategoryDetails,
  updateSubCategoryDetails
};
