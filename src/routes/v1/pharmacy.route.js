const express = require("express");
const { pharmacyValidation } = require("../../validations");
const { pharmacyController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create pharmacy */
router.post(
  "/create-pharmacy",
  validate(pharmacyValidation.createPharmacy),
  pharmacyController.createPharmacy
);

/** Get pharmacy list */
router.get(
  "/list-pharmacy",
  validate(pharmacyValidation.getPharmacyList),
  pharmacyController.getPharmacyList
);

/** Delete pharmacy */
router.delete(
  "/delete-pharmacy/:pharmacyId",
  validate(pharmacyValidation.getPharmacyDetails),
  pharmacyController.deletePharmacy
);

/**pharmacy details update id */
router.put(
  "/update-pharmacy/:pharmacyId",
  validate(pharmacyValidation.updatePharmacyDetails),
  pharmacyController.updatePharmacyDetails
  )

module.exports = router;
