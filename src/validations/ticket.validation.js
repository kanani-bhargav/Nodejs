const Joi = require("joi")

const create_ticket = {
    body: Joi.object().keys({
        ticket_number: Joi.string().required().trim(),
        event_name: Joi.string().required().trim(),
        ticket_holder: Joi.string().required().trim(),
        ticket_price: Joi.number().required(),
    })
}

module.exports = {
    create_ticket
}