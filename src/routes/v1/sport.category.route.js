const express = require("express");
const validate = require("../../middlewares/validate");
const { sport_category_Validation } = require("../../validations");
const { sport_category_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-sport_category",
    validate(sport_category_Validation.create_sport_category),
    sport_category_Controller.create_sport_category
)

router.put(
    "/update-sport_category/:sport_categoryId",
    validate(sport_category_Validation.create_sport_category),
    sport_category_Controller.update_sport_category
)

router.delete(
    "/delete-sport_category/:sport_categoryId",
    sport_category_Controller.delete_sport_category
)

router.get(
    "/list",
    sport_category_Controller.get_sport_category_list
)



module.exports = router;