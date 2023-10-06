const Joi = require("joi")

const create_event = {
    body: Joi.object().keys({
        event_date: Joi.string().required().trim(),
        event_name: Joi.string().required().trim(),
        event_location: Joi.string().required().trim(),
        event_description: Joi.string().required().trim(),
    })
}

module.exports = {
    create_event
}