const Joi = require("joi");

/** create crypto_link */
const create_crypto_link = {
  body: Joi.object().keys({
    crypto_link_name: Joi.string().required().trim(),
    crypto_link_desc: Joi.string().required().trim(),
    crypto: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_crypto_link
}