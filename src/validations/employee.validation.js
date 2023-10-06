const Joi = require("joi")

const create_employee = {
    body: Joi.object().keys({
        employee_name: Joi.string().required().trim(),
        employee_email: Joi.string().required().trim(),
        employee_address: Joi.string().required().trim(),
        employee_department: Joi.string().required().trim(),
        employee_salary:Joi.number().required()
    })
}

module.exports = {
    create_employee
}