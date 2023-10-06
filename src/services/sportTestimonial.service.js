const {SportTestimonial} = require("../models");

/**
 * Create sportTestimonial
 * @param {object} reqBody
 * @returns {Promise<SportTestimonial>}
 */
const createSportTestimonial = async (reqBody) => {
  return SportTestimonial.create(reqBody);
};

/**
 * Get sportTestimonial list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<SportTestimonial>}
 */
const getSportTestimonialList = async () => {
  return SportTestimonial.find()
};

/**
 * Get sportTestimonial details by id
 * @param {ObjectId} sportTestimonialId
 * @returns {Promise<SportTestimonial>}
 */
const getSportTestimonialById = async (sportTestimonialId) => {
  return SportTestimonial.findById(sportTestimonialId);
};

/**
 * Delete sportTestimonial
 * @param {ObjectId} sportTestimonialId
 * @returns {Promise<SportTestimonial>}
 */
const deleteSportTestimonial = async (sportTestimonialId) => {
  return SportTestimonial.findByIdAndDelete(sportTestimonialId);
};

/**
 * sportTestimonial details update by id
 * @param {ObjectId} sportTestimonialId
 * @param {object} updateBody
 * @returns {Promise<SportTestimonial>}
 */
const updateSportTestimonial = async (sportTestimonialId, updateBody) => {
  return SportTestimonial.findByIdAndUpdate(sportTestimonialId, { $set: updateBody });
};


module.exports = {
  createSportTestimonial,
  getSportTestimonialList,
  getSportTestimonialById,
  updateSportTestimonial,
  deleteSportTestimonial,
};