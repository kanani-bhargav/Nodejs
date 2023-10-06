const express = require("express");
const validate = require("../../middlewares/validate");
const { crypto_Validation } = require("../../validations");
const { crypto_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-crypto",
    validate(crypto_Validation.create_crypto),
    crypto_Controller.create_crypto
)

router.put(
    "/update-crypto/:cryptoId",
    validate(crypto_Validation.create_crypto),
    crypto_Controller.update_crypto
)

router.delete(
    "/delete-crypto/:cryptoId",
    crypto_Controller.delete_crypto
)

router.get(
    "/list",
    crypto_Controller.get_crypto_list
)



module.exports = router;