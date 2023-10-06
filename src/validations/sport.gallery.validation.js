const Joi = require("joi");

/** create sport_gallery */
const create_sport_gallery = {
  body: Joi.object().keys({
    sport_gallery_name: Joi.string().required().trim(),
    sport_gallery_desc: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_sport_gallery
}