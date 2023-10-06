const { Mobile } = require("../models");

/**
 * Create mobile
 * @param {object} reqBody
 * @returns {Promise<Mobile>}
 */
const createMobile = async (reqBody) => {
  return Mobile.create(reqBody);
};

/**
 * Get mobile list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Mobile>}
 */
const getMobileList = async (filter, options) => {
  return Mobile.find()
};

/**
 * Delete mobile
 * @param {ObjectId} mobileId
 * @returns {Promise<Mobile>}
 */
const deleteMobile = async (mobileId) => {
  return Mobile.findByIdAndDelete(mobileId);
};

/**
 * mobile details update by id
 * @param {ObjectId} mobileId
 * @param {object} updateBody
 * @returns {Promise<Mobile>}
 */
const updateMobileDetails = async (mobileId, updateBody) => {
  return Mobile.findByIdAndUpdate(mobileId, { $set: updateBody });
};

module.exports = {
  createMobile,
  getMobileList,
  deleteMobile,
  updateMobileDetails
};
