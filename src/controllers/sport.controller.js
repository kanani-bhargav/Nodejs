const { sportNameService } = require("../services");

/** create sportName */
const createSportName = async (req, res) => {
  try {
    const reqBody = req.body;
    if (req.file) {
      reqBody.sport_image = req.file.filename;
    } else {
      throw new Error("Banner image is required!");
    }

    const sportName = await sportNameService.createSportName(reqBody);
    if (!sportName) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "SportName create successfully!",
      data: { sportName },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get sportName list */
const getSportNameList = async (req, res) => {
  try {

    const getList = await sportNameService.getSportNameList();

    res.status(200).json({
      success: true,
      message: "Get sportName list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get sportName details by id */
const getSportNameDetails = async (req, res) => {
  try {
    const getDetails = await sportNameService.getSportNameById(req.params.sportNameId);
    if (!getDetails) {
      throw new Error("SportName not found!");
    }

    res.status(200).json({
      success: true,
      message: "SportName details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** sportName details update by id */
const updateSportName = async (req, res) => {
  try {
    const sportNameId = req.params.sportNameId;
    const sportNameExists = await sportNameService.getSportNameById(sportNameId);
    if (!sportNameExists) {
      throw new Error("SportName not found!");
    }

    await sportNameService.updateSportName(sportNameId, req.body);

    res
      .status(200)
      .json({ success: true, message: "SportName details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete sportName */
const deleteSportName = async (req, res) => {
  try {
    const sportNameId = req.params.sportNameId;
    const sportNameExists = await sportNameService.getSportNameById(sportNameId);
    if (!sportNameExists) {
      throw new Error("SportName not found!");
    }

    await sportNameService.deleteSportName(sportNameId);

    res.status(200).json({
      success: true,
      message: "SportName delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createSportName,
  getSportNameList,
  getSportNameDetails,
  updateSportName,
  deleteSportName,
};