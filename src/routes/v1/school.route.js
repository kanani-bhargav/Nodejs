const express = require("express");
const { schoolValidation } = require("../../validations");
const { schoolController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create school */
router.post(
  "/create-school",
  validate(schoolValidation.createSchool),
  schoolController.createSchool
);

/** Get school list */
router.get(
  "/list-school",
  validate(schoolValidation.getSchoolList),
  schoolController.getSchoolList
);

/** Delete school */
router.delete(
  "/delete-school/:schoolId",
  validate(schoolValidation.getSchoolDetails),
  schoolController.deleteSchool
);

/**school details update id */
router.put(
  "/update-school/:schoolId",
  validate(schoolValidation.updateSchoolDetails),
  schoolController.updateSchoolDetails
  )

module.exports = router;
