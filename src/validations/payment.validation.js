const Joi = require("joi")

const create_payment = {
    body: Joi.object().keys({
        payer: Joi.string().required().trim(),
        payer_contact: Joi.string().required().trim(),
        payment_date: Joi.string().required().trim(),
        payment_method: Joi.string().required().trim(),
        payment_amount:Joi.number().required()
    })
}

module.exports = {
    create_payment
}