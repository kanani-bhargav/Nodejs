const express = require("express");
const { sportNameValidation } = require("../../validations");
const { sportNameController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const upload = require("../../middlewares/upload");

const router = express.Router();

/** create sportName */
router.post(
  "/create-sportName",
  upload.single("sport_image"),
  validate(sportNameValidation.createSportName),
  sportNameController.createSportName
);

/** Get sportName list */
router.get(
  "/list-sportName",
  validate(sportNameValidation.getSportNameList),
  sportNameController.getSportNameList
);

/** Get sportName details by id */
router.get(
  "/getsportName-sportName/:sportNameId",
  validate(sportNameValidation.getDetails),
  sportNameController.getSportNameDetails
);

/** sportName details update by id */
router.put(
  "/update-sportName/:sportNameId",
  validate(sportNameValidation.updateSportName),
  sportNameController.updateSportName
);

/** Delete sportName */
router.delete(
  "/delete-sportName/:sportNameId",
  validate(sportNameValidation.getDetails),
  sportNameController.deleteSportName
);

module.exports = router;