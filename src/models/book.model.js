const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    author: {
      type: String,
      trim: true,
    },
    publicationYear: {
      type: Number
    },
    is_active: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Book = mongoose.model("books", bookSchema);
module.exports = Book;
