const express = require("express");
const validate = require("../../middlewares/validate");
const { sport_event_Validation } = require("../../validations");
const { sport_event_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-sport_event",
    validate(sport_event_Validation.create_sport_event),
    sport_event_Controller.create_sport_event
)

router.put(
    "/update-sport_event/:sport_eventId",
    validate(sport_event_Validation.create_sport_event),
    sport_event_Controller.update_sport_event
)

router.delete(
    "/delete-sport_event/:sport_eventId",
    sport_event_Controller.delete_sport_event
)

router.get(
    "/list",
    sport_event_Controller.get_sport_event_list
)



module.exports = router;