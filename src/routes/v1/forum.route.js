const express = require("express");
const validate = require("../../middlewares/validate");
const { forum_Validation } = require("../../validations");
const { forum_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-forum",
    validate(forum_Validation.create_forum),
    forum_Controller.create_forum
)

router.put(
    "/update-forum/:forumId",
    validate(forum_Validation.create_forum),
    forum_Controller.update_forum
)

router.delete(
    "/delete-forum/:forumId",
    forum_Controller.delete_forum
)

router.get(
    "/list",
    forum_Controller.get_forum_list
)



module.exports = router;