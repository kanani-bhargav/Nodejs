const Joi = require("joi")

const create_buyer = {
    body: Joi.object().keys({
        buyer_name: Joi.string().required().trim(),
        buyer_contact: Joi.string().required().trim(),
        buyer_address: Joi.string().required().trim(),
        items: Joi.string().required().trim(),
    })
}

module.exports = {
    create_buyer
}