const express = require("express");
const validate = require("../../middlewares/validate");
const { crypto_newsletter_Validation } = require("../../validations");
const { crypto_newsletter_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-crypto_newsletter",
    validate(crypto_newsletter_Validation.create_crypto_newsletter),
    crypto_newsletter_Controller.create_crypto_newsletter
)

router.put(
    "/update-crypto_newsletter/:crypto_newsletterId",
    validate(crypto_newsletter_Validation.create_crypto_newsletter),
    crypto_newsletter_Controller.update_crypto_newsletter
)

router.delete(
    "/delete-crypto_newsletter/:crypto_newsletterId",
    crypto_newsletter_Controller.delete_crypto_newsletter
)

router.get(
    "/list",
    crypto_newsletter_Controller.get_crypto_newsletter_list
)



module.exports = router;