const Joi = require("joi")

const create_forum = {
    body: Joi.object().keys({
        forum_topic: Joi.string().required().trim(),
        forum_author: Joi.string().required().trim(),
        forum_content: Joi.string().required().trim(),
        forum_timestamp: Joi.string().required().trim(),
    })
}

module.exports = {
    create_forum
}