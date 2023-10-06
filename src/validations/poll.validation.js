const Joi = require("joi")

const create_poll = {
    body: Joi.object().keys({
        poll_question: Joi.string().required().trim(),
        poll_options: Joi.string().required().trim(),
        poll_votes: Joi.string().required().trim(),
        poll_expiration: Joi.string().required().trim(),
    })
}

module.exports = {
    create_poll
}