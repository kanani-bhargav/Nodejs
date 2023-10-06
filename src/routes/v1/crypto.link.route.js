const express = require("express");
const validate = require("../../middlewares/validate");
const { crypto_link_Validation } = require("../../validations");
const { crypto_link_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-crypto_link",
    validate(crypto_link_Validation.create_crypto_link),
    crypto_link_Controller.create_crypto_link
)

router.put(
    "/update-crypto_link/:crypto_linkId",
    validate(crypto_link_Validation.create_crypto_link),
    crypto_link_Controller.update_crypto_link
)

router.delete(
    "/delete-crypto_link/:crypto_linkId",
    crypto_link_Controller.delete_crypto_link
)

router.get(
    "/list",
    crypto_link_Controller.get_crypto_link_list
)



module.exports = router;