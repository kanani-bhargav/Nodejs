const Joi = require("joi")

const create_customer = {
    body: Joi.object().keys({
        customer_name: Joi.string().required().trim(),
        customer_code: Joi.string().required().trim(),
        customer_email: Joi.string().required().trim(),
        customer_address: Joi.string().required().trim(),
    })
}

module.exports = {
    create_customer
}