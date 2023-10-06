const express = require("express");
const validate = require("../../middlewares/validate");
const { crypto_news_Validation } = require("../../validations");
const { crypto_news_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-crypto_news",
    validate(crypto_news_Validation.create_crypto_news),
    crypto_news_Controller.create_crypto_news
)

router.put(
    "/update-crypto_news/:crypto_newsId",
    validate(crypto_news_Validation.create_crypto_news),
    crypto_news_Controller.update_crypto_news
)

router.delete(
    "/delete-crypto_news/:crypto_newsId",
    crypto_news_Controller.delete_crypto_news
)

router.get(
    "/list",
    crypto_news_Controller.get_crypto_news_list
)



module.exports = router;