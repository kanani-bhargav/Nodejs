const { Travel } = require("../models");

/**
 * Create Travel
 * @param {object} reqBody
 * @returns {Promise<Travel>}
 */
const createTravel = async (reqBody) => {
  return Travel.create(reqBody);
};

/**
 * Get Travel list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Travel>}
 */
const getTravelList = async (filter, options) => {
  return Travel.find({ $or: [ {package_price:50000}]})
};

/**
 * Delete Travel
 * @param {ObjectId} TravelId
 * @returns {Promise<Travel>}
 */
const deleteTravel = async (TravelId) => {
  return Travel.findByIdAndDelete(TravelId);
};

/**
 * travel details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<Travel>}
 */

const updateTravelDetails=async (travelId,updateBody)=>{
  return  Travel.findByIdAndUpdate(travelId,{$set:updateBody})
}

module.exports = {
    createTravel,
    getTravelList,
    deleteTravel,
    updateTravelDetails
};
