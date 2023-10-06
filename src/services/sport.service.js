const {SportName} = require("../models");

/**
 * Create sportName
 * @param {object} reqBody
 * @returns {Promise<SportName>}
 */
const createSportName = async (reqBody) => {
  return SportName.create(reqBody);
};

/**
 * Get sportName list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<SportName>}
 */
const getSportNameList = async () => {
  return SportName.find()
};

/**
 * Get sportName details by id
 * @param {ObjectId} sportNameId
 * @returns {Promise<SportName>}
 */
const getSportNameById = async (sportNameId) => {
  return SportName.findById(sportNameId);
};

/**
 * Delete sportName
 * @param {ObjectId} sportNameId
 * @returns {Promise<SportName>}
 */
const deleteSportName = async (sportNameId) => {
  return SportName.findByIdAndDelete(sportNameId);
};

/**
 * sportName details update by id
 * @param {ObjectId} sportNameId
 * @param {object} updateBody
 * @returns {Promise<SportName>}
 */
const updateSportName = async (sportNameId, updateBody) => {
  return SportName.findByIdAndUpdate(sportNameId, { $set: updateBody });
};


module.exports = {
  createSportName,
  getSportNameList,
  getSportNameById,
  updateSportName,
  deleteSportName,
};