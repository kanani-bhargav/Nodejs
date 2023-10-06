const express = require("express");
const validate = require("../../middlewares/validate");
const { invoice_Validation } = require("../../validations");
const { invoice_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-invoice",
    validate(invoice_Validation.create_invoice),
    invoice_Controller.create_invoice
)

router.put(
    "/update-invoice/:invoiceId",
    validate(invoice_Validation.create_invoice),
    invoice_Controller.update_invoice
)

router.delete(
    "/delete-invoice/:invoiceId",
    invoice_Controller.delete_invoice
)

router.get(
    "/list",
    invoice_Controller.get_invoice_list
)



module.exports = router;