const { sportOpinionService } = require("../services");

/** create sportOpinion */
const createSportOpinion = async (req, res) => {
  try {
    const reqBody = req.body;
    if (req.file) {
      reqBody.sport_celebrity_image = req.file.filename;
    } else {
      throw new Error("Banner image is required!");
    }

    const sportOpinion = await sportOpinionService.createSportOpinion(reqBody);
    if (!sportOpinion) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "SportOpinion create successfully!",
      data: { sportOpinion },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get sportOpinion list */
const getSportOpinionList = async (req, res) => {
  try {

    const getList = await sportOpinionService.getSportOpinionList();

    res.status(200).json({
      success: true,
      message: "Get sportOpinion list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get sportOpinion details by id */
const getSportOpinionDetails = async (req, res) => {
  try {
    const getDetails = await sportOpinionService.getSportOpinionById(req.params.sportOpinionId);
    if (!getDetails) {
      throw new Error("SportOpinion not found!");
    }

    res.status(200).json({
      success: true,
      message: "SportOpinion details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** sportOpinion details update by id */
const updateSportOpinion = async (req, res) => {
  try {
    const sportOpinionId = req.params.sportOpinionId;
    const sportOpinionExists = await sportOpinionService.getSportOpinionById(sportOpinionId);
    if (!sportOpinionExists) {
      throw new Error("SportOpinion not found!");
    }

    await sportOpinionService.updateSportOpinion(sportOpinionId, req.body);

    res
      .status(200)
      .json({ success: true, message: "SportOpinion details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete sportOpinion */
const deleteSportOpinion = async (req, res) => {
  try {
    const sportOpinionId = req.params.sportOpinionId;
    const sportOpinionExists = await sportOpinionService.getSportOpinionById(sportOpinionId);
    if (!sportOpinionExists) {
      throw new Error("SportOpinion not found!");
    }

    await sportOpinionService.deleteSportOpinion(sportOpinionId);

    res.status(200).json({
      success: true,
      message: "SportOpinion delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createSportOpinion,
  getSportOpinionList,
  getSportOpinionDetails,
  updateSportOpinion,
  deleteSportOpinion,
};