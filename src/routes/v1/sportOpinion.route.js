const express = require("express");
const { sportOpinionValidation } = require("../../validations");
const { sportOpinionController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const upload = require("../../middlewares/upload");

const router = express.Router();

/** create sportOpinion */
router.post(
  "/create-sportOpinion",
  upload.single("sport_celebrity_image"),
  validate(sportOpinionValidation.createSportOpinion),
  sportOpinionController.createSportOpinion
);

/** Get sportOpinion list */
router.get(
  "/list-sportOpinion",
  validate(sportOpinionValidation.getSportOpinionList),
  sportOpinionController.getSportOpinionList
);

/** Get sportOpinion details by id */
router.get(
  "/getsportOpinion-sportOpinion/:sportOpinionId",
  validate(sportOpinionValidation.getDetails),
  sportOpinionController.getSportOpinionDetails
);

/** sportOpinion details update by id */
router.put(
  "/update-sportOpinion/:sportOpinionId",
  validate(sportOpinionValidation.updateSportOpinion),
  sportOpinionController.updateSportOpinion
);

/** Delete sportOpinion */
router.delete(
  "/delete-sportOpinion/:sportOpinionId",
  validate(sportOpinionValidation.getDetails),
  sportOpinionController.deleteSportOpinion
);

module.exports = router;