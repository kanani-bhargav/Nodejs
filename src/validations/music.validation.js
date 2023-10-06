const Joi = require("joi");

/** create createMusic */
const createMusic = {
  body: Joi.object().keys({
    music_title: Joi.string().required().trim(),
    music_publisher: Joi.string().required().trim(),
    music_artist: Joi.string().required().trim(),
    music_released: Joi.string().required().trim(),
  }),
};

/** GEt Music list */
const getMusicList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Music details by id */
const getMusicDetails = {
  params: Joi.object().keys({
    musicId: Joi.string().required().trim(),
  }),
};

/**music details update by id */
const updateMusicDetails={
  params:Joi.object().keys({
    musicId:Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    music_title: Joi.string().required().trim(),
    music_publisher: Joi.string().required().trim(),
    music_artist: Joi.string().required().trim(),
    music_released: Joi.string().required().trim(),
  }),
}


module.exports = {
  createMusic,
  getMusicList,
  getMusicDetails,
  updateMusicDetails
};
