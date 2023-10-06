const express = require("express");
const validate = require("../../middlewares/validate");
const { payment_Validation } = require("../../validations");
const { payment_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-payment",
    validate(payment_Validation.create_payment),
    payment_Controller.create_payment
)

router.put(
    "/update-payment/:paymentId",
    validate(payment_Validation.create_payment),
    payment_Controller.update_payment
)

router.delete(
    "/delete-payment/:paymentId",
    payment_Controller.delete_payment
)

router.get(
    "/list",
    payment_Controller.get_payment_list
)



module.exports = router;