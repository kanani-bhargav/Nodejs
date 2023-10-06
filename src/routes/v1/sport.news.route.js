const express = require("express");
const validate = require("../../middlewares/validate");
const { sport_news_Validation } = require("../../validations");
const { sport_news_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-sport_news",
    validate(sport_news_Validation.create_sport_news),
    sport_news_Controller.create_sport_news
)

router.put(
    "/update-sport_news/:sport_newsId",
    validate(sport_news_Validation.create_sport_news),
    sport_news_Controller.update_sport_news
)

router.delete(
    "/delete-sport_news/:sport_newsId",
    sport_news_Controller.delete_sport_news
)

router.get(
    "/list",
    sport_news_Controller.get_sport_news_list
)



module.exports = router;