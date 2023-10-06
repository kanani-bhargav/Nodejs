const { Stationary } = require("../models");

/**
 * Create Stationary
 * @param {object} reqBody
 * @returns {Promise<Stationary>}
 */
const createStationary = async (reqBody) => {
  return Stationary.create(reqBody);
};

/**
 * Get Stationary list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Stationary>}
 */
const getStationaryList = async (filter, options) => {
  // return Stationary.find()
  return Stationary.find({ $or: [ {stationary_item:"pen"}]})
};

/**
 * Delete Stationary
 * @param {ObjectId} StationaryId
 * @returns {Promise<Stationary>}
 */
const deleteStationary = async (StationaryId) => {
  return Stationary.findByIdAndDelete(StationaryId);
};

/**
 * stationary details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<Stationary>}
 */

const updateStationaryDetails=async (stationaryId,updateBody)=>{
  return  Stationary.findByIdAndUpdate(stationaryId,{$set:updateBody})
}

module.exports = {
    createStationary,
    getStationaryList,
    deleteStationary,
    updateStationaryDetails
};
