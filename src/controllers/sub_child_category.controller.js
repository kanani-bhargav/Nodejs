const { subChildCategoryService } = require("../services");

/** create subChildCategory */
const createSubChildCategory = async (req, res) => {
  try {
    const reqBody = req.body;

    const subChildCategory = await subChildCategoryService.createSubChildCategory(reqBody);
    if (!subChildCategory) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "subChildCategory create successfully!",
      data: { subChildCategory },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get subChildCategory list */
const getSubChildCategoryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { subChildCategory_name: { $regex: search, $options: "i" } },
        { subChildCategory_desc: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await subChildCategoryService.getSubChildCategoryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Category list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete subChildCategory */
const deleteSubChildCategory = async (req, res) => {
  try {
    const subChildCategoryId = req.params.subChildCategoryId;
    console.log(subChildCategoryId);
    const subChildCategoryExists = await subChildCategoryService.deleteSubChildCategory(subChildCategoryId);
    if (!subChildCategoryExists) {
      throw new Error("subChildCategory not found!");
    }

    await subChildCategoryService.deleteSubChildCategory(subChildCategoryId);

    res.status(200).json({
      success: true,
      message: "subChildCategory delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//**update subChildCategory details */
const updateSubChildCategoryDetails = async (req, res) => {
  try{
   const subChildCategoryId=req.params.subChildCategoryId
   const subChildCategoryExists=await subChildCategoryService.updateSubChildCategoryDetails(subChildCategoryId)
   if(!subChildCategoryExists){
     throw new Error("subChildCategory not found");
   }
   await subChildCategoryService.updateSubChildCategoryDetails(subChildCategoryId,req.body)
   res.status(200).json({
     success:true,
     message:"Category details update successfully"
   })
  }catch(error){
   res.status(400).json({success:false,message:error.message})
  }
 };

 module.exports = {
   createSubChildCategory,
   getSubChildCategoryList,
   deleteSubChildCategory,
   updateSubChildCategoryDetails
 };
