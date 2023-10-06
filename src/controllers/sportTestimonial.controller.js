const { sportTestimonialService } = require("../services");

/** create sportTestimonial */
const createSportTestimonial = async (req, res) => {
  try {
    const reqBody = req.body;
    if (req.file) {
      reqBody.student_image = req.file.filename;
    } else {
      throw new Error("Banner image is required!");
    }
    const sportTestimonial = await sportTestimonialService.createSportTestimonial(reqBody);
    if (!sportTestimonial) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "SportTestimonial create successfully!",
      data: { sportTestimonial },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get sportTestimonial list */
const getSportTestimonialList = async (req, res) => {
  try {

    const getList = await sportTestimonialService.getSportTestimonialList();

    res.status(200).json({
      success: true,
      message: "Get sportTestimonial list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get sportTestimonial details by id */
const getSportTestimonialDetails = async (req, res) => {
  try {
    const getDetails = await sportTestimonialService.getSportTestimonialById(req.params.sportTestimonialId);
    if (!getDetails) {
      throw new Error("SportTestimonial not found!");
    }

    res.status(200).json({
      success: true,
      message: "SportTestimonial details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** sportTestimonial details update by id */
const updateSportTestimonial = async (req, res) => {
  try {
    const sportTestimonialId = req.params.sportTestimonialId;
    const sportTestimonialExists = await sportTestimonialService.getSportTestimonialById(sportTestimonialId);
    if (!sportTestimonialExists) {
      throw new Error("SportTestimonial not found!");
    }

    await sportTestimonialService.updateSportTestimonial(sportTestimonialId, req.body);

    res
      .status(200)
      .json({ success: true, message: "SportTestimonial details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete sportTestimonial */
const deleteSportTestimonial = async (req, res) => {
  try {
    const sportTestimonialId = req.params.sportTestimonialId;
    const sportTestimonialExists = await sportTestimonialService.getSportTestimonialById(sportTestimonialId);
    if (!sportTestimonialExists) {
      throw new Error("SportTestimonial not found!");
    }

    await sportTestimonialService.deleteSportTestimonial(sportTestimonialId);

    res.status(200).json({
      success: true,
      message: "SportTestimonial delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createSportTestimonial,
  getSportTestimonialList,
  getSportTestimonialDetails,
  updateSportTestimonial,
  deleteSportTestimonial,
};