const Joi = require("joi");

/** create createUser */
const createUser = {
  body: Joi.object().keys({
    user_firstname: Joi.string().required().trim(),
    user_lastname: Joi.string().required().trim(),
    user_email: Joi.string().required().trim(),
    user_password: Joi.string().required().trim(),
    user_address: Joi.string().required().trim(),
  }),
};

/** GEt User list */
const getUserList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get User details by id */
const getUserDetails = {
  params: Joi.object().keys({
    userId: Joi.string().required().trim(),
  }),
};

/**user details update by id */
const updateUserDetails={
  params:Joi.object().keys({
    userId:Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    user_firstname: Joi.string().required().trim(),
    user_lastname: Joi.string().required().trim(),
    user_email: Joi.string().required().trim(),
    user_password: Joi.string().required().trim(),
    user_address: Joi.string().required().trim(),
  }),
}


module.exports = {
  createUser,
  getUserList,
  getUserDetails,
  updateUserDetails
};
