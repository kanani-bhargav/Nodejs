const { Category } = require("../models");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

/**
 * Get Category list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getCategoryList = async (filter, options) => {
  return Category.find()
  // return Category.find({ $or: [ {is_active:false}] })
};

/**
 * Delete user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteCategory= async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};

/**
 * category details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<Category>}
 */

const updateCategoryDetails=async (categoryId,updateBody)=>{
  return  Category.findByIdAndUpdate(categoryId,{$set:updateBody})
}

module.exports = {
    createCategory,
    getCategoryList,
    deleteCategory,
    updateCategoryDetails
};