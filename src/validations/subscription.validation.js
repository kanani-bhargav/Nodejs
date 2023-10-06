const Joi = require("joi")

const create_subscription = {
    body: Joi.object().keys({
        subscription_name: Joi.string().required().trim(),
        subscription_duration: Joi.string().required().trim(),
        subscription_features: Joi.string().required().trim(),
        subscription_price: Joi.number().required(),
    })
}

module.exports = {
    create_subscription
}