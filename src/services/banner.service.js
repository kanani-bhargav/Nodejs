const { Banner } = require("../models");

/**
 * Create banner
 * @param {object} reqBody
 * @returns {Promise<Product>}
 */
const createBanner = async (reqBody) => {
  return Banner.create(reqBody);
};

/**
 * Get Banner details
 * @param bannerId
 * @returns {Promise<Product>}
 */
const getBanner = async (userId) => {
  return await User.findById(userId);
};

/**
 * Get Banner list
 * @returns {Promise<Product>}
 */
const getBannerList = async () => {
  return await Banner.find();
};

/**
 * Delete Banner
 * @param {ObjectId} bannerId
 * @returns {Promise<Product>}
 */
const deleteBanner = async (bannerId) => {
  return Banner.findByIdAndDelete(bannerId);
};

/**
 * Update Banner details
 * @param {ObjectId} bannerId
 * @param {object} reqBody
 * @returns {Promise<Product>}
 */
const updateBanner = async (bannerId, updateBody) => {
  return Banner.findByIdAndUpdate(bannerId, { $set: updateBody }, { new: true });
};

module.exports = {
  getBanner,
  getBannerList,
  createBanner,
  updateBanner,
  deleteBanner,
};
