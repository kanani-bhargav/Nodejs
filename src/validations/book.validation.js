const Joi = require("joi");

/** create createBook */
const createBook = {
  body: Joi.object().keys({
    title: Joi.string().required().trim(),
    author: Joi.string().required().trim(),
    publicationYear: Joi.number().integer().required(),
  }),
};

/** GEt user list */
const getBookList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get book details by id */
const getBookDetails = {
  params: Joi.object().keys({
    bookId: Joi.string().required().trim(),
  }),
};

/**book details update by id */
const updateBookDetails={
  params:Joi.object().keys({
    bookId:Joi.string().required().trim(),
  }),
  body:Joi.object().keys({
    title: Joi.string().required().trim(),
    author: Joi.string().required().trim(),
    publicationYear: Joi.number().integer().required(),
  })
}


module.exports = {
  createBook,
  getBookList,
  getBookDetails,
  updateBookDetails
};
