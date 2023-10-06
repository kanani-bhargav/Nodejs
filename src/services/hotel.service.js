const { Hotel } = require("../models");

/**
 * Create Hotel
 * @param {object} reqBody
 * @returns {Promise<Hotel>}
 */
const createHotel = async (reqBody) => {
  return Hotel.create(reqBody);
};

/**
 * Get Hotel list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Hotel>}
 */
const getHotelList = async (filter, options) => {
  // return Hotel.find()
  return Hotel.find({ $or: [ {room_no:"ab11"}] })
};

/**
 * Delete Hotel
 * @param {ObjectId} HotelId
 * @returns {Promise<Hotel>}
 */
const deleteHotel = async (HotelId) => {
  return Hotel.findByIdAndDelete(HotelId);
};

/**
 * hotel details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<Hotel>}
 */

const updateHotelDetails=async (hotelId,updateBody)=>{
  return  Hotel.findByIdAndUpdate(hotelId,{$set:updateBody})
}

module.exports = {
    createHotel,
    getHotelList,
    deleteHotel,
    updateHotelDetails
};
