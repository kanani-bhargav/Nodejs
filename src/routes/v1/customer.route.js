const express = require("express");
const validate = require("../../middlewares/validate");
const { customer_Validation } = require("../../validations");
const { customer_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-customer",
    validate(customer_Validation.create_customer),
    customer_Controller.create_customer
)

router.put(
    "/update-customer/:customerId",
    validate(customer_Validation.create_customer),
    customer_Controller.update_customer
)

router.delete(
    "/delete-customer/:customerId",
    customer_Controller.delete_customer
)

router.get(
    "/list",
    customer_Controller.get_customer_list
)



module.exports = router;