const express = require("express");
const validate = require("../../middlewares/validate");
const { sport_contact_Validation } = require("../../validations");
const { sport_contact_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-sport_contact",
    validate(sport_contact_Validation.create_sport_contact),
    sport_contact_Controller.create_sport_contact
)

router.put(
    "/update-sport_contact/:sport_contactId",
    validate(sport_contact_Validation.create_sport_contact),
    sport_contact_Controller.update_sport_contact
)

router.delete(
    "/delete-sport_contact/:sport_contactId",
    sport_contact_Controller.delete_sport_contact
)

router.get(
    "/list",
    sport_contact_Controller.get_sport_contact_list
)



module.exports = router;