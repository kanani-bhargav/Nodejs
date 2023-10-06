const Joi = require("joi");

/** create crypto_calendar */
const create_crypto_calendar = {
  body: Joi.object().keys({
    crypto_calendar_name: Joi.string().required().trim(),
    crypto_calendar_desc: Joi.string().required().trim(),
    crypto: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_crypto_calendar
}