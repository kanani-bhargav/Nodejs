const express = require("express");
const validate = require("../../middlewares/validate");
const { employee_Validation } = require("../../validations");
const { employee_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-employee",
    validate(employee_Validation.create_employee),
    employee_Controller.create_employee
)

router.put(
    "/update-employee/:employeeId",
    validate(employee_Validation.create_employee),
    employee_Controller.update_employee
)

router.delete(
    "/delete-employee/:employeeId",
    employee_Controller.delete_employee
)

router.get(
    "/list",
    employee_Controller.get_employee_list
)



module.exports = router;