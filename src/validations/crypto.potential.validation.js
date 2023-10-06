const Joi = require("joi");

/** create crypto_potential */
const create_crypto_potential = {
  body: Joi.object().keys({
    crypto_potential_name: Joi.string().required().trim(),
    crypto_potential_desc: Joi.string().required().trim(),
    crypto: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_crypto_potential
}