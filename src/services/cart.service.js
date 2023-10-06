const { Cart } = require("../models");

/**
 * Create cart
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createCart = async (reqBody) => {
  return Cart.create(reqBody);
};

/**
 * Get Cart list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getCartList = async (filter, options) => {
  return Cart.find().populate("user").populate("product")
  // return Cart.find({ $or: [ {is_active:false}] })
};

/**
 * Delete user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteCart= async (cartId) => {
  return Cart.findByIdAndDelete(cartId);
};

/**
 * cart details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<Cart>}
 */

const updateCartDetails=async (cartId,updateBody)=>{
  return  Cart.findByIdAndUpdate(cartId,{$set:updateBody})
}

module.exports = {
    createCart,
    getCartList,
    deleteCart,
    updateCartDetails
};