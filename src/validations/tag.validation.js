const Joi = require("joi");

// create tag validation
const create_tag = {
  body: Joi.object().keys({
    tag_name: Joi.string().required().trim(),
    tag_desc: Joi.string().required().trim(),
  }),
};
// Exporting validations object
module.exports = {
    create_tag
}
