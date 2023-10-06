const express = require("express");
const validate = require("../../middlewares/validate");
const { crypto_calendar_Validation } = require("../../validations");
const { crypto_calendar_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-crypto_calendar",
    validate(crypto_calendar_Validation.create_crypto_calendar),
    crypto_calendar_Controller.create_crypto_calendar
)

router.put(
    "/update-crypto_calendar/:crypto_calendarId",
    validate(crypto_calendar_Validation.create_crypto_calendar),
    crypto_calendar_Controller.update_crypto_calendar
)

router.delete(
    "/delete-crypto_calendar/:crypto_calendarId",
    crypto_calendar_Controller.delete_crypto_calendar
)

router.get(
    "/list",
    crypto_calendar_Controller.get_crypto_calendar_list
)



module.exports = router;