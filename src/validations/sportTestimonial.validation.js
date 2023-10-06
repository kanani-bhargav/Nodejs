
const Joi = require("joi");

/** create sportTestimonial */
const createSportTestimonial = {
  body: Joi.object().keys({
    student_name: Joi.string().required().trim(),
    student_image: Joi.string().allow().trim(),
    student_academic_year: Joi.string().required().trim(),
    student_feedback: Joi.string().required().trim(),
  }),
};

/** GEt sportTestimonial list */
const getSportTestimonialList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

/** Get sportTestimonial details by id */
const getDetails = {
  params: Joi.object().keys({
    sportTestimonialId: Joi.string().required().trim(),
  }),
};

/** sportTestimonial details update by id */
const updateSportTestimonial = {
  params: Joi.object().keys({
    sportTestimonialId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    student_name: Joi.string().trim(),
    student_image: Joi.string().trim(),
    student_academic_year: Joi.string().trim(),
    student_feedback: Joi.string().trim(),
  }),
};


module.exports = {
  createSportTestimonial,
  getDetails,
  getSportTestimonialList,
  updateSportTestimonial,
};