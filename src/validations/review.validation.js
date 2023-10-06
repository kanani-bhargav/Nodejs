const Joi = require("joi");

/** create review */
const create_review = {
  body: Joi.object().keys({
    review_topic: Joi.string().required().trim(),
    review_desc: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_review
}