const { schoolService } = require("../services");

/** create school */
const createSchool = async (req, res) => {
  try {
    const reqBody = req.body;

    const school = await schoolService.createSchool(reqBody);
    if (!school) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "School create successfully!",
      data: { school },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get school list */
const getSchoolList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { school_name: { $regex: search, $options: "i" } },
        { school_id: { $regex: search, $options: "i" } },
        { school_location: { $regex: search, $options: "i" } },
        { school_courses: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await schoolService.getSchoolList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get school list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete school */
const deleteSchool = async (req, res) => {
  try {
    const schoolId = req.params.schoolId;
    const schoolExists = await schoolService.deleteSchool(schoolId);
    if (!schoolExists) {
      throw new Error("School not found!");
    }

    await schoolService.deleteSchool(schoolId);

    res.status(200).json({
      success: true,
      message: "School delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//**update school details */
const updateSchoolDetails = async (req, res) => {
  try{
   const schoolId=req.params.schoolId
   const schoolExists=await schoolService.updateSchoolDetails(schoolId)
   if(!schoolExists){
     throw new Error("school not found");
   }
   await schoolService.updateSchoolDetails(schoolId,req.body)
   res.status(200).json({
     success:true,
     message:"School details update successfully"
   })
  }catch(error){
   res.status(400).json({success:false,message:error.message})
  }
 };

 module.exports = {
   createSchool,
   getSchoolList,
   deleteSchool,
   updateSchoolDetails
 };
