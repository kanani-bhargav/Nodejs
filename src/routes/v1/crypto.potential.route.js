const express = require("express");
const validate = require("../../middlewares/validate");
const { crypto_potential_Validation } = require("../../validations");
const { crypto_potential_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-crypto_potential",
    validate(crypto_potential_Validation.create_crypto_potential),
    crypto_potential_Controller.create_crypto_potential
)

router.put(
    "/update-crypto_potential/:crypto_potentialId",
    validate(crypto_potential_Validation.create_crypto_potential),
    crypto_potential_Controller.update_crypto_potential
)

router.delete(
    "/delete-crypto_potential/:crypto_potentialId",
    crypto_potential_Controller.delete_crypto_potential
)

router.get(
    "/list",
    crypto_potential_Controller.get_crypto_potential_list
)

module.exports = router;