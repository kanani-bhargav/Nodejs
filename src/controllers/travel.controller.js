const { travelService } = require("../services");

/** create travel */
const createTravel = async (req, res) => {
  try {
    const reqBody = req.body;

    const travel = await travelService.createTravel(reqBody);
    if (!travel) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Travel create successfully!",
      data: { travel },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get travel list */
const getTravelList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { travelAgency_name: { $regex: search, $options: "i" } },
        { package_place: { $regex: search, $options: "i" } },
        { package_price: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await travelService.getTravelList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get travel list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete travel */
const deleteTravel = async (req, res) => {
  try {
    const travelId = req.params.travelId;
    const travelExists = await travelService.deleteTravel(travelId);
    if (!travelExists) {
      throw new Error("Travel not found!");
    }

    await travelService.deleteTravel(travelId);

    res.status(200).json({
      success: true,
      message: "Travel delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//**update travel details */
const updateTravelDetails = async (req, res) => {
  try{
   const travelId=req.params.travelId
   const travelExists=await travelService.updateTravelDetails(travelId)
   if(!travelExists){
     throw new Error("travel not found");
   }
   await travelService.updateTravelDetails(travelId,req.body)
   res.status(200).json({
     success:true,
     message:"Travel details update successfully"
   })
  }catch(error){
   res.status(400).json({success:false,message:error.message})
  }
 };

 module.exports = {
   createTravel,
   getTravelList,
   deleteTravel,
   updateTravelDetails
 };
