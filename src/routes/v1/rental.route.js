const express = require("express");
const validate = require("../../middlewares/validate");
const { rental_Validation } = require("../../validations");
const { rental_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-rental",
    validate(rental_Validation.create_rental),
    rental_Controller.create_rental
)

router.put(
    "/update-rental/:rentalId",
    validate(rental_Validation.create_rental),
    rental_Controller.update_rental
)

router.delete(
    "/delete-rental/:rentalId",
    rental_Controller.delete_rental
)

router.get(
    "/list",
    rental_Controller.get_rental_list
)



module.exports = router;