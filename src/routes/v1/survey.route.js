const express = require("express");
const validate = require("../../middlewares/validate");
const { survey_Validation } = require("../../validations");
const { survey_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-survey",
    validate(survey_Validation.create_survey),
    survey_Controller.create_survey
)

router.put(
    "/update-survey/:surveyId",
    validate(survey_Validation.create_survey),
    survey_Controller.update_survey
)

router.delete(
    "/delete-survey/:surveyId",
    survey_Controller.delete_survey
)

router.get(
    "/list",
    survey_Controller.get_survey_list
)



module.exports = router;