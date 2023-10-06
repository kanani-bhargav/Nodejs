const { SubCategory } = require("../models");

/**
 * Create subCategory
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createSubCategory = async (reqBody) => {
  return SubCategory.create(reqBody);
};

/**
 * Get SubCategory list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getSubCategoryList = async (filter, options) => {
  return SubCategory.find().populate("category")
  // return SubCategory.find({ $or: [ {is_active:false}] })
};

/**
 * Delete user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteSubCategory= async (subCategoryId) => {
  return SubCategory.findByIdAndDelete(subCategoryId);
};

/**
 * subCategory details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<SubCategory>}
 */

const updateSubCategoryDetails=async (subCategoryId,updateBody)=>{
  return  SubCategory.findByIdAndUpdate(subCategoryId,{$set:updateBody})
}

module.exports = {
    createSubCategory,
    getSubCategoryList,
    deleteSubCategory,
    updateSubCategoryDetails
};