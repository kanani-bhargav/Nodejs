const { subCategoryService } = require("../services");

/** create subCategory */
const createSubCategory = async (req, res) => {
  try {
    const reqBody = req.body;

    const subCategory = await subCategoryService.createSubCategory(reqBody);
    if (!subCategory) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "subCategory create successfully!",
      data: { subCategory },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get subCategory list */
const getSubCategoryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { subCategory_name: { $regex: search, $options: "i" } },
        { subCategory_desc: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await subCategoryService.getSubCategoryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Category list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete subCategory */
const deleteSubCategory = async (req, res) => {
  try {
    const subCategoryId = req.params.subCategoryId;
    console.log(subCategoryId);
    const subCategoryExists = await subCategoryService.deleteSubCategory(subCategoryId);
    if (!subCategoryExists) {
      throw new Error("subCategory not found!");
    }

    await subCategoryService.deleteSubCategory(subCategoryId);

    res.status(200).json({
      success: true,
      message: "subCategory delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//**update subCategory details */
const updateSubCategoryDetails = async (req, res) => {
  try{
   const subCategoryId=req.params.subCategoryId
   const subCategoryExists=await subCategoryService.updateSubCategoryDetails(subCategoryId)
   if(!subCategoryExists){
     throw new Error("subCategory not found");
   }
   await subCategoryService.updateSubCategoryDetails(subCategoryId,req.body)
   res.status(200).json({
     success:true,
     message:"Category details update successfully"
   })
  }catch(error){
   res.status(400).json({success:false,message:error.message})
  }
 };

 module.exports = {
   createSubCategory,
   getSubCategoryList,
   deleteSubCategory,
   updateSubCategoryDetails
 };
