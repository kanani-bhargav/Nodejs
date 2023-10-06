const express = require("express");
const { jewelleryValidation } = require("../../validations");
const { jewelleryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create jewellery */
router.post(
  "/create-jewellery",
  validate(jewelleryValidation.createJewellery),
  jewelleryController.createJewellery
);

/** Get jewellery list */
router.get(
  "/list-jewellery",
  validate(jewelleryValidation.getJewelleryList),
  jewelleryController.getJewelleryList
);

/** Delete jewellery */
router.delete(
  "/delete-jewellery/:jewelleryId",
  validate(jewelleryValidation.getJewelleryDetails),
  jewelleryController.deleteJewellery
);

/**jewellery details update id */
router.put(
  "/update-jewellery/:jewelleryId",
  validate(jewelleryValidation.updateJewelleryDetails),
  jewelleryController.updateJewelleryDetails
  )

module.exports = router;
