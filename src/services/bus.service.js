const { Bus } = require("../models");

/**
 * Create bus
 * @param {object} reqBody
 * @returns {Promise<Bus>}
 */
const createBus = async (reqBody) => {
  return Bus.create(reqBody);
};

/**
 * Get bus list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Bus>}
 */
const getBusList = async (filter, options) => {
  // return Bus.find()
  return Bus.find({ $or: [ {bus_name:"ram"}] })
};

/**
 * Delete bus
 * @param {ObjectId} busId
 * @returns {Promise<Bus>}
 */
const deleteBus = async (busId) => {
  return Bus.findByIdAndDelete(busId);
};

/**
 * bus details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<Bus>}
 */

const updateBusDetails=async (busId,updateBody)=>{
  return  Bus.findByIdAndUpdate(busId,{$set:updateBody})
}

module.exports = {
    createBus,
    getBusList,
    deleteBus,
    updateBusDetails
};
