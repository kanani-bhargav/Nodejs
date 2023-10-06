const { categoryService } = require("../services");

/** create category */
const createCategory = async (req, res) => {
  try {
    const reqBody = req.body;

    const category = await categoryService.createCategory(reqBody);
    if (!category) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "category create successfully!",
      data: { category },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get category list */
const getCategoryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    const getList = await categoryService.getCategoryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Category list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete category */
const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    console.log(categoryId);
    const categoryExists = await categoryService.deleteCategory(categoryId);
    if (!categoryExists) {
      throw new Error("category not found!");
    }

    await categoryService.deleteCategory(categoryId);

    res.status(200).json({
      success: true,
      message: "category delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//**update category details */
const updateCategoryDetails = async (req, res) => {
  try{
   const categoryId=req.params.categoryId
   const categoryExists=await categoryService.updateCategoryDetails(categoryId)
   if(!categoryExists){
     throw new Error("category not found");
   }
   await categoryService.updateCategoryDetails(categoryId,req.body)
   res.status(200).json({
     success:true,
     message:"Category details update successfully"
   })
  }catch(error){
   res.status(400).json({success:false,message:error.message})
  }
 };

 module.exports = {
   createCategory,
   getCategoryList,
   deleteCategory,
   updateCategoryDetails
 };
