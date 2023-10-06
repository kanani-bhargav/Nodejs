const express = require("express");
const validate = require("../../middlewares/validate");
const { crypto_faq_Validation } = require("../../validations");
const { crypto_faq_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-crypto_faq",
    validate(crypto_faq_Validation.create_crypto_faq),
    crypto_faq_Controller.create_crypto_faq
)

router.put(
    "/update-crypto_faq/:crypto_faqId",
    validate(crypto_faq_Validation.create_crypto_faq),
    crypto_faq_Controller.update_crypto_faq
)

router.delete(
    "/delete-crypto_faq/:crypto_faqId",
    crypto_faq_Controller.delete_crypto_faq
)

router.get(
    "/list",
    crypto_faq_Controller.get_crypto_faq_list
)



module.exports = router;