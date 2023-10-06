const Joi = require("joi");

/** create createSubChildCategory */
const createSubChildCategory = {
  body: Joi.object().keys({
    sub_child_category_name: Joi.string().required().trim(),
    sub_child_category_description: Joi.string().required().trim(),
    sub_category: Joi.string().required().trim(),
    category: Joi.string().required().trim(),
  }),
};

/** GEt SubChildCategory list */
const getSubChildCategoryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get SubChildCategory details by id */
const getSubChildCategoryDetails = {
  params: Joi.object().keys({
    subChildCategoryId: Joi.string().required().trim(),
  }),
};

/**category details update by id */
const updateSubChildCategoryDetails={
  params:Joi.object().keys({
    subChildCategoryId:Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    sub_child_category_name: Joi.string().required().trim(),
    sub_child_category_description: Joi.string().required().trim(),
  }),
}


module.exports = {
  createSubChildCategory,
  getSubChildCategoryList,
  getSubChildCategoryDetails,
  updateSubChildCategoryDetails
};
