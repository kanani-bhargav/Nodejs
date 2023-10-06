const express = require("express");
const validate = require("../../middlewares/validate");
const { crypto_rating_Validation } = require("../../validations");
const { crypto_rating_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-crypto_rating",
    validate(crypto_rating_Validation.create_crypto_rating),
    crypto_rating_Controller.create_crypto_rating
)

router.put(
    "/update-crypto_rating/:crypto_ratingId",
    validate(crypto_rating_Validation.create_crypto_rating),
    crypto_rating_Controller.update_crypto_rating
)

router.delete(
    "/delete-crypto_rating/:crypto_ratingId",
    crypto_rating_Controller.delete_crypto_rating
)

router.get(
    "/list",
    crypto_rating_Controller.get_crypto_rating_list
)



module.exports = router;