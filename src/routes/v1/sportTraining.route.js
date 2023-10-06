const express = require("express");
const { sportTrainingValidation } = require("../../validations");
const { sportTrainingController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const upload = require("../../middlewares/upload");

const router = express.Router();

/** create sportTraining */
router.post(
  "/create-sportTraining",
  upload.single("trainer_image"),
  validate(sportTrainingValidation.createSportTraining),
  sportTrainingController.createSportTraining
);

/** Get sportTraining list */
router.get(
  "/list-sportTraining",
  validate(sportTrainingValidation.getSportTrainingList),
  sportTrainingController.getSportTrainingList
);

/** Get sportTraining details by id */
router.get(
  "/getsportTraining-sportTraining/:sportTrainingId",
  validate(sportTrainingValidation.getDetails),
  sportTrainingController.getSportTrainingDetails
);

/** sportTraining details update by id */
router.put(
  "/update-sportTraining/:sportTrainingId",
  validate(sportTrainingValidation.updateSportTraining),
  sportTrainingController.updateSportTraining
);

/** Delete sportTraining */
router.delete(
  "/delete-sportTraining/:sportTrainingId",
  validate(sportTrainingValidation.getDetails),
  sportTrainingController.deleteSportTraining
);

module.exports = router;