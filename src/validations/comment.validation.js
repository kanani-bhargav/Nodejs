const Joi = require("joi");

/** create comment */
const create_comment = {
  body: Joi.object().keys({
    comment_topic: Joi.string().required().trim(),
    comment_desc: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_comment
}