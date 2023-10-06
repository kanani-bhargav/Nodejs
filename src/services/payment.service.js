const { Payment } = require("../models");

/**
 * Create payment
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createPayment = async (reqBody) => {
  return Payment.create(reqBody);
};

/**
 * Get Payment list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getPaymentList = async (filter, options) => {
  return Payment.find().populate("order").populate("user")
  // return Payment.find({ $or: [ {is_active:false}] })
};

/**
 * Delete user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deletePayment= async (paymentId) => {
  return Payment.findByIdAndDelete(paymentId);
};

/**
 * payment details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<Payment>}
 */

const updatePaymentDetails=async (paymentId,updateBody)=>{
  return  Payment.findByIdAndUpdate(paymentId,{$set:updateBody})
}

module.exports = {
    createPayment,
    getPaymentList,
    deletePayment,
    updatePaymentDetails
};