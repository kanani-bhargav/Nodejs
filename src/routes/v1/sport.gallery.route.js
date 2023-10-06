const express = require("express");
const validate = require("../../middlewares/validate");
const { sport_gallery_Validation } = require("../../validations");
const { sport_gallery_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-sport_gallery",
    validate(sport_gallery_Validation.create_sport_gallery),
    sport_gallery_Controller.create_sport_gallery
)

router.put(
    "/update-sport_gallery/:sport_galleryId",
    validate(sport_gallery_Validation.create_sport_gallery),
    sport_gallery_Controller.update_sport_gallery
)

router.delete(
    "/delete-sport_gallery/:sport_galleryId",
    sport_gallery_Controller.delete_sport_gallery
)

router.get(
    "/list",
    sport_gallery_Controller.get_sport_gallery_list
)



module.exports = router;