const express = require("express");
const validate = require("../../middlewares/validate");
const { comment_Validation } = require("../../validations");
const { comment_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-comment",
    validate(comment_Validation.create_comment),
    comment_Controller.create_comment
)

router.put(
    "/update-comment/:commentId",
    validate(comment_Validation.create_comment),
    comment_Controller.update_comment
)

router.delete(
    "/delete-comment/:commentId",
    comment_Controller.delete_comment
)

router.get(
    "/list",
    comment_Controller.get_comment_list
)



module.exports = router;