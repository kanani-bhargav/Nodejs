const { validate } = require("../models/category_model");
const { mobileService } = require("../services");
const { mobileValidation } = require("../validations");

/** create mobile */
const createMobile = async (req, res) => {
  try {
    const reqBody = req.body;

    const mobile = await mobileService.createMobile(reqBody);
    if (!mobile) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Mobile create successfully!",
      data: { mobile },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get mobile list */
const getMobileList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { mobile_name: { $regex: search, $options: "i" } },
        { mobile_number: { $regex: search, $options: "i" } },
        { mobile_pickup: { $regex: search, $options: "i" } },
        { mobile_destination: { $regex: search, $options: "i" } },
        { mobile_time: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await mobileService.getMobileList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get mobile list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete mobile */
const deleteMobile = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;
    const mobileExists = await mobileService.deleteMobile(mobileId);
    if (!mobileExists) {
      throw new Error("Mobile not found!");
    }

    await mobileService.deleteMobile(mobileId);

    res.status(200).json({
      success: true,
      message: "Mobile delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** mobile details update by id */
const updateMobileDetails = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;
    const mobileExists = await mobileService.updateMobileDetails(mobileId);
    if (!mobileExists) {
      throw new Error("Mobile not found!");
    }

    await mobileService.updateMobileDetails(mobileId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Mobile details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createMobile,
  getMobileList,
  deleteMobile,
  updateMobileDetails
};
