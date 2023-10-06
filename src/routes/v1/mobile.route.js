const express = require("express");
const validate = require("../../middlewares/validate");
const { mobileValidation } = require("../../validations");
const { mobileController } = require("../../controllers")

const router = express.Router();

/** create mobile */
router.post(
    "/create-mobile",
    validate(mobileValidation.createMobile),
    mobileController.createMobile
)

/** mobile list*/
router.get(
    "/list-mobile",
    validate(mobileValidation.getMobileList),
    mobileController.getMobileList
)
/** delete mobile*/
router.delete(
    "/delete-mobile/:mobileId",
    validate(mobileValidation.getMobileDetails),
    mobileController.deleteMobile
)

/** update mobile */
router.put(
    "/update-mobile/:mobileId",
    validate(mobileValidation.updateMobileDetails),
    mobileController.updateMobileDetails
)


module.exports = router;