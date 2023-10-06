const { sportTrainingService } = require("../services");

/** create sportTraining */
const createSportTraining = async (req, res) => {
  try {
    const reqBody = req.body;
    if (req.file) {
      reqBody.trainer_image = req.file.filename;
    } else {
      throw new Error("Banner image is required!");
    }
    const sportTraining = await sportTrainingService.createSportTraining(reqBody);
    if (!sportTraining) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "SportTraining create successfully!",
      data: { sportTraining },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get sportTraining list */
const getSportTrainingList = async (req, res) => {
  try {

    const getList = await sportTrainingService.getSportTrainingList();

    res.status(200).json({
      success: true,
      message: "Get sportTraining list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get sportTraining details by id */
const getSportTrainingDetails = async (req, res) => {
  try {
    const getDetails = await sportTrainingService.getSportTrainingById(req.params.sportTrainingId);
    if (!getDetails) {
      throw new Error("SportTraining not found!");
    }

    res.status(200).json({
      success: true,
      message: "SportTraining details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** sportTraining details update by id */
const updateSportTraining = async (req, res) => {
  try {
    const sportTrainingId = req.params.sportTrainingId;
    const sportTrainingExists = await sportTrainingService.getSportTrainingById(sportTrainingId);
    if (!sportTrainingExists) {
      throw new Error("SportTraining not found!");
    }

    await sportTrainingService.updateSportTraining(sportTrainingId, req.body);

    res
      .status(200)
      .json({ success: true, message: "SportTraining details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete sportTraining */
const deleteSportTraining = async (req, res) => {
  try {
    const sportTrainingId = req.params.sportTrainingId;
    const sportTrainingExists = await sportTrainingService.getSportTrainingById(sportTrainingId);
    if (!sportTrainingExists) {
      throw new Error("SportTraining not found!");
    }

    await sportTrainingService.deleteSportTraining(sportTrainingId);

    res.status(200).json({
      success: true,
      message: "SportTraining delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createSportTraining,
  getSportTrainingList,
  getSportTrainingDetails,
  updateSportTraining,
  deleteSportTraining,
};