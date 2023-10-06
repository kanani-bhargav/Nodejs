const Joi = require("joi");

/** create crypto_faq */
const create_crypto_faq = {
  body: Joi.object().keys({
    crypto_faq_name: Joi.string().required().trim(),
    crypto_faq_desc: Joi.string().required().trim(),
    crypto: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_crypto_faq
}