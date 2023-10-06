const Joi = require("joi");

/** create createSchool */
const createSchool = {
  body: Joi.object().keys({
    school_name: Joi.string().required().trim(),
    school_id: Joi.number().integer().required(),
    school_location: Joi.string().required().trim(),
    school_courses: Joi.string().required().trim(),
  }),
};

/** GEt School list */
const getSchoolList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get School details by id */
const getSchoolDetails = {
  params: Joi.object().keys({
    schoolId: Joi.string().required().trim(),
  }),
};

/**school details update by id */
const updateSchoolDetails={
  params:Joi.object().keys({
    schoolId:Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    school_name: Joi.string().required().trim(),
    school_id: Joi.number().integer().required(),
    school_location: Joi.string().required().trim(),
    school_courses: Joi.string().required().trim(),
  }),
}


module.exports = {
  createSchool,
  getSchoolList,
  getSchoolDetails,
  updateSchoolDetails
};
