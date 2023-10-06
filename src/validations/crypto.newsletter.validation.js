const Joi = require("joi");

/** create crypto_newsletter */
const create_crypto_newsletter = {
  body: Joi.object().keys({
    crypto_newsletter_name: Joi.string().required().trim(),
    crypto_newsletter_desc: Joi.string().required().trim(),
    crypto: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_crypto_newsletter
}