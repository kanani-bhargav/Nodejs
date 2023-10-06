const Joi = require("joi");

/** create crypto_type */
const create_crypto_type = {
  body: Joi.object().keys({
    crypto_type_name: Joi.string().required().trim(),
    crypto_type_desc: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_crypto_type
}