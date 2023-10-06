const { Jewellery } = require("../models");

/**
 * Create Jewellery
 * @param {object} reqBody
 * @returns {Promise<Jewellery>}
 */
const createJewellery = async (reqBody) => {
  return Jewellery.create(reqBody);
};

/**
 * Get Jewellery list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Jewellery>}
 */
const getJewelleryList = async (filter, options) => {
  // return Jewellery.find()
  return Jewellery.find({ $or: [ {jewelleryShop_name:"tanishq"}] })
};

/**
 * Delete Jewellery
 * @param {ObjectId} JewelleryId
 * @returns {Promise<Jewellery>}
 */
const deleteJewellery = async (JewelleryId) => {
  return Jewellery.findByIdAndDelete(JewelleryId);
};

/**
 * jewellery details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<Jewellery>}
 */

const updateJewelleryDetails=async (jewelleryId,updateBody)=>{
  return  Jewellery.findByIdAndUpdate(jewelleryId,{$set:updateBody})
}

module.exports = {
    createJewellery,
    getJewelleryList,
    deleteJewellery,
    updateJewelleryDetails
};
