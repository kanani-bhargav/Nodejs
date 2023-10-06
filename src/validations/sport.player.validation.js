const Joi = require("joi");

/** create sport_player */
const create_sport_player = {
  body: Joi.object().keys({
    sport_player_name: Joi.string().required().trim(),
    sport_player_desc: Joi.string().required().trim(),
    sport: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_sport_player
}