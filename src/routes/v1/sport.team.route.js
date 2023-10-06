const express = require("express");
const validate = require("../../middlewares/validate");
const { sport_team_Validation } = require("../../validations");
const { sport_team_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-sport_team",
    validate(sport_team_Validation.create_sport_team),
    sport_team_Controller.create_sport_team
)

router.put(
    "/update-sport_team/:sport_teamId",
    validate(sport_team_Validation.create_sport_team),
    sport_team_Controller.update_sport_team
)

router.delete(
    "/delete-sport_team/:sport_teamId",
    sport_team_Controller.delete_sport_team
)

router.get(
    "/list",
    sport_team_Controller.get_sport_team_list
)



module.exports = router;