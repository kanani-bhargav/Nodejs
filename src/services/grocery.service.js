const { Grocery } = require("../models");

/**
 * Create Grocery
 * @param {object} reqBody
 * @returns {Promise<Grocery>}
 */
const createGrocery = async (reqBody) => {
  return Grocery.create(reqBody);
};

/**
 * Get Grocery list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Grocery>}
 */
const getGroceryList = async (filter, options) => {
  // return Grocery.find()
  return Grocery.find({ $or: [ {groceryShop_location:"katargam"}] })
};

/**
 * Delete Grocery
 * @param {ObjectId} GroceryId
 * @returns {Promise<Grocery>}
 */
const deleteGrocery = async (GroceryId) => {
  return Grocery.findByIdAndDelete(GroceryId);
};

/**
 * grocery details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<Grocery>}
 */

const updateGroceryDetails=async (groceryId,updateBody)=>{
  return  Grocery.findByIdAndUpdate(groceryId,{$set:updateBody})
}

module.exports = {
    createGrocery,
    getGroceryList,
    deleteGrocery,
    updateGroceryDetails
};
