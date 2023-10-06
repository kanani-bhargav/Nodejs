const express = require("express");
const validate = require("../../middlewares/validate");
const { sport_founder_Validation } = require("../../validations");
const { sport_founder_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-sport_founder",
    validate(sport_founder_Validation.create_sport_founder),
    sport_founder_Controller.create_sport_founder
)

router.put(
    "/update-sport_founder/:sport_founderId",
    validate(sport_founder_Validation.create_sport_founder),
    sport_founder_Controller.update_sport_founder
)

router.delete(
    "/delete-sport_founder/:sport_founderId",
    sport_founder_Controller.delete_sport_founder
)

router.get(
    "/list",
    sport_founder_Controller.get_sport_founder_list
)



module.exports = router;