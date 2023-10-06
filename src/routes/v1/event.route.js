const express = require("express");
const validate = require("../../middlewares/validate");
const { event_Validation } = require("../../validations");
const { event_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-event",
    validate(event_Validation.create_event),
    event_Controller.create_event
)

router.put(
    "/update-event/:eventId",
    validate(event_Validation.create_event),
    event_Controller.update_event
)

router.delete(
    "/delete-event/:eventId",
    event_Controller.delete_event
)

router.get(
    "/list",
    event_Controller.get_event_list
)



module.exports = router;