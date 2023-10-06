const Joi = require("joi");

/** create sport_result */
const create_sport_result = {
  body: Joi.object().keys({
    sport_result_name: Joi.string().required().trim(),
    sport_result_desc: Joi.string().required().trim(),
    event: Joi.string().required().trim(),
    sport: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_sport_result
}