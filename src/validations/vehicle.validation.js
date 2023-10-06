const Joi = require("joi")

const create_vehicle = {
    body: Joi.object().keys({
        vehicle_maker: Joi.string().required().trim(),
        vehicle_model: Joi.string().required().trim(),
        vehicle_year: Joi.number().required(),
        vehicle_registration: Joi.string().required().trim(),
    })
}

module.exports = {
    create_vehicle
}