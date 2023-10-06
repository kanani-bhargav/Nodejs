const express = require("express");
const { hotelValidation } = require("../../validations");
const { hotelController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create hotel */
router.post(
  "/create-hotel",
  validate(hotelValidation.createHotel),
  hotelController.createHotel
);

/** Get hotel list */
router.get(
  "/list-hotel",
  validate(hotelValidation.getHotelList),
  hotelController.getHotelList
);

/** Delete hotel */
router.delete(
  "/delete-hotel/:hotelId",
  validate(hotelValidation.getHotelDetails),
  hotelController.deleteHotel
);

/**hotel details update id */
router.put(
  "/update-hotel/:hotelId",
  validate(hotelValidation.updateHotelDetails),
  hotelController.updateHotelDetails
  )

module.exports = router;
