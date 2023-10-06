const express = require("express");
const validate = require("../../middlewares/validate");
const { sport_Validation } = require("../../validations");
const { sport_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-sport_name",
    validate(sport_Validation.create_sport),
    sport_Controller.create_sport
)

router.put(
    "/update-sport_name/:sport_nameId",
    validate(sport_Validation.create_sport),
    sport_Controller.update_sport
)

router.delete(
    "/delete-sport_name/:sport_nameId",
    sport_Controller.delete_sport
)

router.get(
    "/list",
    sport_Controller.get_sport_list
)



module.exports = router;