
const Joi = require("joi");

/** create sportStudent */
const createSportStudent = {
  body: Joi.object().keys({
    student_name: Joi.string().required().trim(),
    student_image: Joi.string().allow().trim(),
    student_academy: Joi.string().required().trim(),
  }),
};

/** GEt sportStudent list */
const getSportStudentList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

/** Get sportStudent details by id */
const getDetails = {
  params: Joi.object().keys({
    sportStudentId: Joi.string().required().trim(),
  }),
};

/** sportStudent details update by id */
const updateSportStudent = {
  params: Joi.object().keys({
    sportStudentId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    student_name: Joi.string().trim(),
    student_image: Joi.string().trim(),
    student_academy: Joi.string().trim(),
  }),
};


module.exports = {
  createSportStudent,
  getDetails,
  getSportStudentList,
  updateSportStudent,
};