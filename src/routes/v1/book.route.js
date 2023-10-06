const express = require("express");
const { bookValidation } = require("../../validations");
const { bookController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const router = express.Router();

/** create book */
router.post(
  "/create-book",
  validate(bookValidation.createBook),
  bookController.createBook
);

/** Get book list */
router.get(
  "/list-book",
  validate(bookValidation.getBookList),
  bookController.getBookList
);

/** Delete book */
router.delete(
  "/delete-book/:bookId",
  validate(bookValidation.getBookDetails),
  bookController.deleteBook
);

/**book details update id */
router.put(
  "/update-book/:bookId",
  validate(bookValidation.updateBookDetails),
  bookController.updateBookDetails
  )
  
  module.exports = router;