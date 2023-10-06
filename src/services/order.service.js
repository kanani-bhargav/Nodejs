const { Order } = require("../models");

/**
 * Create order
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createOrder = async (reqBody) => {
  return Order.create(reqBody);
};

/**
 * Get Order list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getOrderList = async (filter, options) => {
  return Order.find().populate("cart").populate("product")
  // return Order.find({ $or: [ {is_active:false}] })
};

/**
 * Delete user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteOrder= async (orderId) => {
  return Order.findByIdAndDelete(orderId);
};

/**
 * order details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<Order>}
 */

const updateOrderDetails=async (orderId,updateBody)=>{
  return  Order.findByIdAndUpdate(orderId,{$set:updateBody})
}

module.exports = {
    createOrder,
    getOrderList,
    deleteOrder,
    updateOrderDetails
};