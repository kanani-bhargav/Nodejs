const Joi = require("joi");

/** create crypto_client */
const create_crypto_client = {
  body: Joi.object().keys({
    crypto_client_name: Joi.string().required().trim(),
    crypto_client_desc: Joi.string().required().trim(),
    crypto: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_crypto_client
}