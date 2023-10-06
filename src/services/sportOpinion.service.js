const {SportOpinion} = require("../models");

/**
 * Create sportOpinion
 * @param {object} reqBody
 * @returns {Promise<SportOpinion>}
 */
const createSportOpinion = async (reqBody) => {
  return SportOpinion.create(reqBody);
};

/**
 * Get sportOpinion list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<SportOpinion>}
 */
const getSportOpinionList = async () => {
  return SportOpinion.find()
};

/**
 * Get sportOpinion details by id
 * @param {ObjectId} sportOpinionId
 * @returns {Promise<SportOpinion>}
 */
const getSportOpinionById = async (sportOpinionId) => {
  return SportOpinion.findById(sportOpinionId);
};

/**
 * Delete sportOpinion
 * @param {ObjectId} sportOpinionId
 * @returns {Promise<SportOpinion>}
 */
const deleteSportOpinion = async (sportOpinionId) => {
  return SportOpinion.findByIdAndDelete(sportOpinionId);
};

/**
 * sportOpinion details update by id
 * @param {ObjectId} sportOpinionId
 * @param {object} updateBody
 * @returns {Promise<SportOpinion>}
 */
const updateSportOpinion = async (sportOpinionId, updateBody) => {
  return SportOpinion.findByIdAndUpdate(sportOpinionId, { $set: updateBody });
};


module.exports = {
  createSportOpinion,
  getSportOpinionList,
  getSportOpinionById,
  updateSportOpinion,
  deleteSportOpinion,
};