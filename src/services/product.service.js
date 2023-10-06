const { Product } = require("../models");

/**
 * Create product
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

/**
 * Get Product list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getProductList = async (filter, options) => {
  return Product.find().populate("sub_child_category")
  // return Product.find({ $or: [ {is_active:false}] })
};

/**
 * Delete user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteProduct= async (productId) => {
  return Product.findByIdAndDelete(productId);
};

/**
 * product details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<Product>}
 */

const updateProductDetails=async (productId,updateBody)=>{
  return  Product.findByIdAndUpdate(productId,{$set:updateBody})
}

module.exports = {
    createProduct,
    getProductList,
    deleteProduct,
    updateProductDetails
};