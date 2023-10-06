const express = require("express");
const validate = require("../../middlewares/validate");
const { poll_Validation } = require("../../validations");
const { poll_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-poll",
    validate(poll_Validation.create_poll),
    poll_Controller.create_poll
)

router.put(
    "/update-poll/:pollId",
    validate(poll_Validation.create_poll),
    poll_Controller.update_poll
)

router.delete(
    "/delete-poll/:pollId",
    poll_Controller.delete_poll
)

router.get(
    "/list",
    poll_Controller.get_poll_list
)



module.exports = router;