const { useServices } = require("../services");

const createUser = async (req, res) => {
  try {
    const reqBody = req.body;
    const user = await useServices.createUser(reqBody);
    if (!user) {
      throw new Error(` somthing went wrong`);
    }
    res.status(200).json({
      success: true,
      message: `user create successfully`,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getUserList = async (req, res) => {
  try {
    const user = await useServices.getUserList();
    if (!user) {
      throw new Error(`user not found`);
    }
    res.status(200).json({
      success: true,
      message: `user list get successfully`,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId=req.params.userId

    const user = await useServices.getUser(userId);
    if (!user) {
      throw new Error(`user not found`);
    }
    await useServices.deleteUser(userId)
    res.status(200).json({
      success: true,
      message: `user delete successfully`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId=req.params.userId
    const updateBody = req.body;

    const user = await useServices.getUser(userId);
    if (!user) {
      throw new Error(` user not found`);
    }
    await useServices.updateUser(userId,updateBody)
    res.status(200).json({
      success: true,
      message: `user update successfully`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createUser,
  getUserList,
  deleteUser,
  updateUser
};
