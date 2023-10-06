const express = require("express");
const validate = require("../../middlewares/validate");
const { review_Validation } = require("../../validations");
const { review_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-review",
    validate(review_Validation.create_review),
    review_Controller.create_review
)

router.put(
    "/update-review/:reviewId",
    validate(review_Validation.create_review),
    review_Controller.update_review
)

router.delete(
    "/delete-review/:reviewId",
    review_Controller.delete_review
)

router.get(
    "/list",
    review_Controller.get_review_list
)



module.exports = router;