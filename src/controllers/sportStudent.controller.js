const { sportStudentService } = require("../services");

/** create sportStudent */
const createSportStudent = async (req, res) => {
  try {
    const reqBody = req.body;
    if (req.file) {
      reqBody.student_image = req.file.filename;
    } else {
      throw new Error("Banner image is required!");
    }
    const sportStudent = await sportStudentService.createSportStudent(reqBody);
    if (!sportStudent) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "SportStudent create successfully!",
      data: { sportStudent },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get sportStudent list */
const getSportStudentList = async (req, res) => {
  try {

    const getList = await sportStudentService.getSportStudentList();

    res.status(200).json({
      success: true,
      message: "Get sportStudent list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get sportStudent details by id */
const getSportStudentDetails = async (req, res) => {
  try {
    const getDetails = await sportStudentService.getSportStudentById(req.params.sportStudentId);
    if (!getDetails) {
      throw new Error("SportStudent not found!");
    }

    res.status(200).json({
      success: true,
      message: "SportStudent details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** sportStudent details update by id */
const updateSportStudent = async (req, res) => {
  try {
    const sportStudentId = req.params.sportStudentId;
    const sportStudentExists = await sportStudentService.getSportStudentById(sportStudentId);
    if (!sportStudentExists) {
      throw new Error("SportStudent not found!");
    }

    await sportStudentService.updateSportStudent(sportStudentId, req.body);

    res
      .status(200)
      .json({ success: true, message: "SportStudent details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete sportStudent */
const deleteSportStudent = async (req, res) => {
  try {
    const sportStudentId = req.params.sportStudentId;
    const sportStudentExists = await sportStudentService.getSportStudentById(sportStudentId);
    if (!sportStudentExists) {
      throw new Error("SportStudent not found!");
    }

    await sportStudentService.deleteSportStudent(sportStudentId);

    res.status(200).json({
      success: true,
      message: "SportStudent delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createSportStudent,
  getSportStudentList,
  getSportStudentDetails,
  updateSportStudent,
  deleteSportStudent,
};