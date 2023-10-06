const Joi = require("joi");

/** create sport_team */
const create_sport_team = {
  body: Joi.object().keys({
    sport_team_name: Joi.string().required().trim(),
    sport:Joi.string().required().trim(),
    sport_player_1:Joi.string().required().trim(),
    sport_player_2:Joi.string().required().trim(),
    sport_player_3:Joi.string().required().trim(),
  }),
};

module.exports = {
    create_sport_team
}