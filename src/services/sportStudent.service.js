const {SportStudent} = require("../models");

/**
 * Create sportStudent
 * @param {object} reqBody
 * @returns {Promise<SportStudent>}
 */
const createSportStudent = async (reqBody) => {
  return SportStudent.create(reqBody);
};

/**
 * Get sportStudent list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<SportStudent>}
 */
const getSportStudentList = async () => {
  return SportStudent.find()
};

/**
 * Get sportStudent details by id
 * @param {ObjectId} sportStudentId
 * @returns {Promise<SportStudent>}
 */
const getSportStudentById = async (sportStudentId) => {
  return SportStudent.findById(sportStudentId);
};

/**
 * Delete sportStudent
 * @param {ObjectId} sportStudentId
 * @returns {Promise<SportStudent>}
 */
const deleteSportStudent = async (sportStudentId) => {
  return SportStudent.findByIdAndDelete(sportStudentId);
};

/**
 * sportStudent details update by id
 * @param {ObjectId} sportStudentId
 * @param {object} updateBody
 * @returns {Promise<SportStudent>}
 */
const updateSportStudent = async (sportStudentId, updateBody) => {
  return SportStudent.findByIdAndUpdate(sportStudentId, { $set: updateBody });
};


module.exports = {
  createSportStudent,
  getSportStudentList,
  getSportStudentById,
  updateSportStudent,
  deleteSportStudent,
};