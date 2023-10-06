const express = require("express");
const validate = require("../../middlewares/validate");
const { sport_coach_Validation } = require("../../validations");
const { sport_coach_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-sport_coach",
    validate(sport_coach_Validation.create_sport_coach),
    sport_coach_Controller.create_sport_coach
)

router.put(
    "/update-sport_coach/:sport_coachId",
    validate(sport_coach_Validation.create_sport_coach),
    sport_coach_Controller.update_sport_coach
)

router.delete(
    "/delete-sport_coach/:sport_coachId",
    sport_coach_Controller.delete_sport_coach
)

router.get(
    "/list",
    sport_coach_Controller.get_sport_coach_list
)



module.exports = router;