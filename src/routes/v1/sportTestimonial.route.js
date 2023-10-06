const express = require("express");
const { sportTestimonialValidation } = require("../../validations");
const { sportTestimonialController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const upload = require("../../middlewares/upload");

const router = express.Router();

/** create sportTestimonial */
router.post(
  "/create-sportTestimonial",
  upload.single("student_image"),
  validate(sportTestimonialValidation.createSportTestimonial),
  sportTestimonialController.createSportTestimonial
);

/** Get sportTestimonial list */
router.get(
  "/list-sportTestimonial",
  validate(sportTestimonialValidation.getSportTestimonialList),
  sportTestimonialController.getSportTestimonialList
);

/** Get sportTestimonial details by id */
router.get(
  "/getsportTestimonial-sportTestimonial/:sportTestimonialId",
  validate(sportTestimonialValidation.getDetails),
  sportTestimonialController.getSportTestimonialDetails
);

/** sportTestimonial details update by id */
router.put(
  "/update-sportTestimonial/:sportTestimonialId",
  validate(sportTestimonialValidation.updateSportTestimonial),
  sportTestimonialController.updateSportTestimonial
);

/** Delete sportTestimonial */
router.delete(
  "/delete-sportTestimonial/:sportTestimonialId",
  validate(sportTestimonialValidation.getDetails),
  sportTestimonialController.deleteSportTestimonial
);

module.exports = router;