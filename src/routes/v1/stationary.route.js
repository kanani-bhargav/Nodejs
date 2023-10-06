const express = require("express");
const { stationaryValidation } = require("../../validations");
const { stationaryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create stationary */
router.post(
  "/create-stationary",
  validate(stationaryValidation.createStationary),
  stationaryController.createStationary
);

/** Get stationary list */
router.get(
  "/list-stationary",
  validate(stationaryValidation.getStationaryList),
  stationaryController.getStationaryList
);

/** Delete stationary */
router.delete(
  "/delete-stationary/:stationaryId",
  validate(stationaryValidation.getStationaryDetails),
  stationaryController.deleteStationary
);

/**stationary details update id */
router.put(
  "/update-stationary/:stationaryId",
  validate(stationaryValidation.updateStationaryDetails),
  stationaryController.updateStationaryDetails
  )

module.exports = router;
