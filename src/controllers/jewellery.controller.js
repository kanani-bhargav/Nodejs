const { jewelleryService } = require("../services");

/** create jewellery */
const createJewellery = async (req, res) => {
  try {
    const reqBody = req.body;

    const jewellery = await jewelleryService.createJewellery(reqBody);
    if (!jewellery) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Jewellery create successfully!",
      data: { jewellery },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get jewellery list */
const getJewelleryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { jewelleryShop_name: { $regex: search, $options: "i" } },
        { jewelleryShop_location: { $regex: search, $options: "i" } },
        { jewellery_item: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await jewelleryService.getJewelleryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get jewellery list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete jewellery */
const deleteJewellery = async (req, res) => {
  try {
    const jewelleryId = req.params.jewelleryId;
    const jewelleryExists = await jewelleryService.deleteJewellery(jewelleryId);
    if (!jewelleryExists) {
      throw new Error("Jewellery not found!");
    }

    await jewelleryService.deleteJewellery(jewelleryId);

    res.status(200).json({
      success: true,
      message: "Jewellery delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//**update jewellery details */
const updateJewelleryDetails = async (req, res) => {
  try{
   const jewelleryId=req.params.jewelleryId
   const jewelleryExists=await jewelleryService.updateJewelleryDetails(jewelleryId)
   if(!jewelleryExists){
     throw new Error("jewellery not found");
   }
   await jewelleryService.updateJewelleryDetails(jewelleryId,req.body)
   res.status(200).json({
     success:true,
     message:"Jewellery details update successfully"
   })
  }catch(error){
   res.status(400).json({success:false,message:error.message})
  }
 };

 module.exports = {
   createJewellery,
   getJewelleryList,
   deleteJewellery,
   updateJewelleryDetails
 };