const express = require("express");
const validate = require("../../middlewares/validate");
const { crypto_client_Validation } = require("../../validations");
const { crypto_client_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-crypto_client",
    validate(crypto_client_Validation.create_crypto_client),
    crypto_client_Controller.create_crypto_client
)

router.put(
    "/update-crypto_client/:crypto_clientId",
    validate(crypto_client_Validation.create_crypto_client),
    crypto_client_Controller.update_crypto_client
)

router.delete(
    "/delete-crypto_client/:crypto_clientId",
    crypto_client_Controller.delete_crypto_client
)

router.get(
    "/list",
    crypto_client_Controller.get_crypto_client_list
)



module.exports = router;