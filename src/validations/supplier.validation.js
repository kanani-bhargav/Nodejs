const Joi = require("joi")

const create_supplier = {
    body: Joi.object().keys({
        supplier_name: Joi.string().required().trim(),
        supplier_contact: Joi.string().required().trim(),
        supplier_address: Joi.string().required().trim(),
        supplies: Joi.string().required().trim(),
    })
}

module.exports = {
    create_supplier
}