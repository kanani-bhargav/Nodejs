const { Book } = require("../models");

/**
 * Create book
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBook= async (reqBody) => {
  return Book.create(reqBody);
};

/**
 * Get book list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getBookList = async (filter, options) => {
  return Book.find()
  // return Book.find({ $or: [ {publicationYear:2020}] })
};

/**
 * Delete book
 * @param {ObjectId} bookId
 * @returns {Promise<Book>}
 */
const deleteBook = async (bookId) => {
  return Book.findByIdAndDelete(bookId);
};

/**
 * book details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<Book>}
 */

const updateBookDetails=async (bookId,updateBody)=>{
  return  Book.findByIdAndUpdate(bookId,{$set:updateBody})
}

module.exports = {
    createBook,
    getBookList,
    deleteBook,
    updateBookDetails
};
