const Joi = require("joi");

/** create crypto_founder */
const create_crypto_founder = {
  body: Joi.object().keys({
    crypto_founder_name: Joi.string().required().trim(),
    crypto_founder_desc: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_crypto_founder
}