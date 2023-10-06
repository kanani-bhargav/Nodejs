const { bookService, userService } = require("../services");

/** create book */
const createBook = async (req, res) => {
  try {
    const reqBody = req.body;
    const book = await bookService.createBook(reqBody);
    if (!book) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "book create successfully!",
      data: { book },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get book list */
const getBookList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { author: { $regex: search, $options: "i" } },
        { publicationYear: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await bookService.getBookList(filter, options);
    res.status(200).json({
      success: true,
      message: "Get book list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete book */
const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    console.log(bookId);
    const bookExists = await bookService.deleteBook(bookId);
    if (!bookExists) {
      throw new Error("book not found!");
    }

    await bookService.deleteBook(bookId);

    res.status(200).json({
      success: true,
      message: "book delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//**update book details */
const updateBookDetails = async (req, res) => {
 try{
  const bookId=req.params.bookId
  const bookExists=await bookService.updateBookDetails(bookId)
  if(!bookExists){
    throw new Error("book not found");
  }

  await bookService.updateBookDetails(bookId,req.body)

  res.status(200).json({
    success:true,
    message:"Book details update successfully"
  })
 }catch(error){
  res.status(400).json({success:false,message:error.message})
 }

};

module.exports = {
  createBook,
  getBookList,
  deleteBook,
  updateBookDetails
};
