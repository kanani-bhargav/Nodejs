const {SportTraining} = require("../models");

/**
 * Create sportTraining
 * @param {object} reqBody
 * @returns {Promise<SportTraining>}
 */
const createSportTraining = async (reqBody) => {
  return SportTraining.create(reqBody);
};

/**
 * Get sportTraining list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<SportTraining>}
 */
const getSportTrainingList = async () => {
  return SportTraining.find()
};

/**
 * Get sportTraining details by id
 * @param {ObjectId} sportTrainingId
 * @returns {Promise<SportTraining>}
 */
const getSportTrainingById = async (sportTrainingId) => {
  return SportTraining.findById(sportTrainingId);
};

/**
 * Delete sportTraining
 * @param {ObjectId} sportTrainingId
 * @returns {Promise<SportTraining>}
 */
const deleteSportTraining = async (sportTrainingId) => {
  return SportTraining.findByIdAndDelete(sportTrainingId);
};

/**
 * sportTraining details update by id
 * @param {ObjectId} sportTrainingId
 * @param {object} updateBody
 * @returns {Promise<SportTraining>}
 */
const updateSportTraining = async (sportTrainingId, updateBody) => {
  return SportTraining.findByIdAndUpdate(sportTrainingId, { $set: updateBody });
};


module.exports = {
  createSportTraining,
  getSportTrainingList,
  getSportTrainingById,
  updateSportTraining,
  deleteSportTraining,
};