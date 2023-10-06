const { Pharmacy } = require("../models");

/**
 * Create Pharmacy
 * @param {object} reqBody
 * @returns {Promise<Pharmacy>}
 */
const createPharmacy = async (reqBody) => {
  return Pharmacy.create(reqBody);
};

/**
 * Get Pharmacy list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Pharmacy>}
 */
const getPharmacyList = async (filter, options) => {
  // return Pharmacy.find()
  return Pharmacy.find({ $or: [ {medicine_name:"folvite"}] })
};

/**
 * Delete Pharmacy
 * @param {ObjectId} PharmacyId
 * @returns {Promise<Pharmacy>}
 */
const deletePharmacy = async (PharmacyId) => {
  return Pharmacy.findByIdAndDelete(PharmacyId);
};

/**
 * pharmacy details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<Pharmacy>}
 */

const updatePharmacyDetails=async (pharmacyId,updateBody)=>{
  return  Pharmacy.findByIdAndUpdate(pharmacyId,{$set:updateBody})
}

module.exports = {
    createPharmacy,
    getPharmacyList,
    deletePharmacy,
    updatePharmacyDetails
};
