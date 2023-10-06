const express = require("express");
const validate = require("../../middlewares/validate");
const { ticket_Validation } = require("../../validations");
const { ticket_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-ticket",
    validate(ticket_Validation.create_ticket),
    ticket_Controller.create_ticket
)

router.put(
    "/update-ticket/:ticketId",
    validate(ticket_Validation.create_ticket),
    ticket_Controller.update_ticket
)

router.delete(
    "/delete-ticket/:ticketId",
    ticket_Controller.delete_ticket
)

router.get(
    "/list",
    ticket_Controller.get_ticket_list
)



module.exports = router;