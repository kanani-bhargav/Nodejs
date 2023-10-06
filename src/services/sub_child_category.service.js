const { SubChildCategory } = require("../models");

/**
 * Create subChildCategory
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createSubChildCategory = async (reqBody) => {
  return SubChildCategory.create(reqBody);
};

/**
 * Get SubChildCategory list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getSubChildCategoryList = async (filter, options) => {
  return SubChildCategory.find().populate("sub_category").populate("category")
  // return SubChildCategory.find({ $or: [ {is_active:false}] })
};

/**
 * Delete user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteSubChildCategory= async (subChildCategoryId) => {
  return SubChildCategory.findByIdAndDelete(subChildCategoryId);
};

/**
 * subChildCategory details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<SubChildCategory>}
 */

const updateSubChildCategoryDetails=async (subChildCategoryId,updateBody)=>{
  return  SubChildCategory.findByIdAndUpdate(subChildCategoryId,{$set:updateBody})
}

module.exports = {
    createSubChildCategory,
    getSubChildCategoryList,
    deleteSubChildCategory,
    updateSubChildCategoryDetails
};