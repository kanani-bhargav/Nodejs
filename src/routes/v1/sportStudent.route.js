const express = require("express");
const { sportStudentValidation } = require("../../validations");
const { sportStudentController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const upload = require("../../middlewares/upload");

const router = express.Router();

/** create sportStudent */
router.post(
  "/create-sportStudent",
  upload.single("student_image"),
  validate(sportStudentValidation.createSportStudent),
  sportStudentController.createSportStudent
);

/** Get sportStudent list */
router.get(
  "/list-sportStudent",
  validate(sportStudentValidation.getSportStudentList),
  sportStudentController.getSportStudentList
);

/** Get sportStudent details by id */
router.get(
  "/getsportStudent-sportStudent/:sportStudentId",
  validate(sportStudentValidation.getDetails),
  sportStudentController.getSportStudentDetails
);

/** sportStudent details update by id */
router.put(
  "/update-sportStudent/:sportStudentId",
  validate(sportStudentValidation.updateSportStudent),
  sportStudentController.updateSportStudent
);

/** Delete sportStudent */
router.delete(
  "/delete-sportStudent/:sportStudentId",
  validate(sportStudentValidation.getDetails),
  sportStudentController.deleteSportStudent
);

module.exports = router;