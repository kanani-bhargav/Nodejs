const Joi = require("joi")

const create_survey = {
    body: Joi.object().keys({
        survey_title: Joi.string().required().trim(),
        survey_questions: Joi.string().required().trim(),
        survey_responses: Joi.string().required().trim(),
        survey_participants: Joi.number().required(),
    })
}

module.exports = {
    create_survey
}