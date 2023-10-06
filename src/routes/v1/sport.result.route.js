const express = require("express");
const validate = require("../../middlewares/validate");
const { sport_result_Validation } = require("../../validations");
const { sport_result_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-sport_result",
    validate(sport_result_Validation.create_sport_result),
    sport_result_Controller.create_sport_result
)

router.put(
    "/update-sport_result/:sport_resultId",
    validate(sport_result_Validation.create_sport_result),
    sport_result_Controller.update_sport_result
)

router.delete(
    "/delete-sport_result/:sport_resultId",
    sport_result_Controller.delete_sport_result
)

router.get(
    "/list",
    sport_result_Controller.get_sport_result_list
)



module.exports = router;