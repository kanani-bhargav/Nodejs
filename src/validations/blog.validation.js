const Joi = require("joi");
// Create blog
const create_blog = {
  body: Joi.object().keys({
    blog_title: Joi.string().required().trim(),
    blog_desc: Joi.string().required().trim(),
  }),
};
// Exporting blog validation object
module.exports = {
    create_blog
}