const express = require("express");
const validate = require("../../middlewares/validate");
const { crypto_founder_Validation } = require("../../validations");
const { crypto_founder_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-crypto_founder",
    validate(crypto_founder_Validation.create_crypto_founder),
    crypto_founder_Controller.create_crypto_founder
)

router.put(
    "/update-crypto_founder/:crypto_founderId",
    validate(crypto_founder_Validation.create_crypto_founder),
    crypto_founder_Controller.update_crypto_founder
)

router.delete(
    "/delete-crypto_founder/:crypto_founderId",
    crypto_founder_Controller.delete_crypto_founder
)

router.get(
    "/list",
    crypto_founder_Controller.get_crypto_founder_list
)



module.exports = router;