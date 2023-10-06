const Joi = require("joi");

/** create sport */
const create_sport = {
  body: Joi.object().keys({
    sport_name: Joi.string().required().trim(),
    sport_desc: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_sport
}