const Joi = require("joi")

const create_rental = {
    body: Joi.object().keys({
        rental_item: Joi.string().required().trim(),
        rental_price: Joi.number().required(),
        rental_duration: Joi.string().required().trim(),
        rental_location: Joi.string().required().trim(),
    })
}

module.exports = {
    create_rental
}