const Joi = require("joi");

/** create sport_news */
const create_sport_news = {
  body: Joi.object().keys({
    sport_news_name: Joi.string().required().trim(),
    sport_news_desc: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_sport_news
}