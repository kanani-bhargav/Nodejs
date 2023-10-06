const { userService } = require("../services");

/** create user */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;

    const user = await userService.createUser(reqBody);
    if (!user) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "user create successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get user list */
const getUserList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};
    const getList = await userService.getUserList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get User list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete user */
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log(userId);
    const userExists = await userService.deleteUser(userId);
    if (!userExists) {
      throw new Error("user not found!");
    }

    await userService.deleteUser(userId);

    res.status(200).json({
      success: true,
      message: "user delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//**update user details */
const updateUserDetails = async (req, res) => {
  try{
   const userId=req.params.userId
   const userExists=await userService.updateUserDetails(userId)
   if(!userExists){
     throw new Error("user not found");
   }
   await userService.updateUserDetails(userId,req.body)
   res.status(200).json({
     success:true,
     message:"User details update successfully"
   })
  }catch(error){
   res.status(400).json({success:false,message:error.message})
  }
 };

 module.exports = {
   createUser,
   getUserList,
   deleteUser,
   updateUserDetails
 };
