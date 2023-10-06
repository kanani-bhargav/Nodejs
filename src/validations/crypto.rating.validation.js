const Joi = require("joi");

/** create crypto_rating */
const create_crypto_rating = {
  body: Joi.object().keys({
    crypto_rating_name: Joi.string().required().trim(),
    crypto_rating_desc: Joi.string().required().trim(),
    crypto: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_crypto_rating
}