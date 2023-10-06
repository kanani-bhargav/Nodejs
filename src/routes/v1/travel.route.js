const express = require("express");
const { travelValidation } = require("../../validations");
const { travelController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create travel */
router.post(
  "/create-travel",
  validate(travelValidation.createTravel),
  travelController.createTravel
);

/** Get travel list */
router.get(
  "/list-travel",
  validate(travelValidation.getTravelList),
  travelController.getTravelList
);

/** Delete travel */
router.delete(
  "/delete-travel/:travelId",
  validate(travelValidation.getTravelDetails),
  travelController.deleteTravel
);

/**travel details update id */
router.put(
  "/update-travel/:travelId",
  validate(travelValidation.updateTravelDetails),
  travelController.updateTravelDetails
  )

module.exports = router;
