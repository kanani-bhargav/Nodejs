const Joi = require("joi")

const create_inventory = {
    body: Joi.object().keys({
        item_name: Joi.string().required().trim(),
        item_desc: Joi.string().required().trim(),
        item_quantity: Joi.number().required(),
        item_price: Joi.number().required(),
    })
}

module.exports = {
    create_inventory
}