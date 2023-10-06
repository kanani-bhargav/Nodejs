const Joi = require("joi");

/** create crypto */
const create_crypto = {
  body: Joi.object().keys({
    crypto_name: Joi.string().required().trim(),
    crypto_desc: Joi.string().required().trim(),
    crypto: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_crypto
}