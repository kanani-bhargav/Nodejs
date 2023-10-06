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
  return Product.find()
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

/**
 * Get product details
 * @param {ObjectId} productId
 * @returns {Promise<Product>}
 */
const getProductById = async (productId) => {
  return Product.findOne({ _id: productId }).populate({
    path: "category",
    select: ["_id"],
  });
};

module.exports = {
    createProduct,
    getProductList,
    deleteProduct,
    updateProductDetails,
    getProductById
};

