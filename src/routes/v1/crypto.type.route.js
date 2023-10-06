const express = require("express");
const validate = require("../../middlewares/validate");
const { crypto_type_Validation } = require("../../validations");
const { crypto_type_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-crypto_type",
    validate(crypto_type_Validation.create_crypto_type),
    crypto_type_Controller.create_crypto_type
)

router.put(
    "/update-crypto_type/:crypto_typeId",
    validate(crypto_type_Validation.create_crypto_type),
    crypto_type_Controller.update_crypto_type
)

router.delete(
    "/delete-crypto_type/:crypto_typeId",
    crypto_type_Controller.delete_crypto_type
)

router.get(
    "/list",
    crypto_type_Controller.get_crypto_type_list
)



module.exports = router;