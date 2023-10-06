const Joi = require("joi");

/** create sport_contact */
const create_sport_contact = {
  body: Joi.object().keys({
    sport_contact_path: Joi.string().required().trim(),
    sport_contact_desc: Joi.string().required().trim(),
    sport: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_sport_contact
}