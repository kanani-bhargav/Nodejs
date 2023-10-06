const Joi = require("joi")

const create_invoice = {
    body: Joi.object().keys({
        invoice_no: Joi.string().required().trim(),
        invoice_desc: Joi.string().required().trim(),
        invoice_date: Joi.string().required().trim(),
        invoice_total: Joi.number().required()
    })
}

module.exports = {
    create_invoice
}