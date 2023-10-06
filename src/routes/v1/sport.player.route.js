const express = require("express");
const validate = require("../../middlewares/validate");
const { sport_player_Validation } = require("../../validations");
const { sport_player_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-sport_player",
    validate(sport_player_Validation.create_sport_player),
    sport_player_Controller.create_sport_player
)

router.put(
    "/update-sport_player/:sport_playerId",
    validate(sport_player_Validation.create_sport_player),
    sport_player_Controller.update_sport_player
)

router.delete(
    "/delete-sport_player/:sport_playerId",
    sport_player_Controller.delete_sport_player
)

router.get(
    "/list",
    sport_player_Controller.get_sport_player_list
)



module.exports = router;