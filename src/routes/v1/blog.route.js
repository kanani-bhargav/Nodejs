const express = require("express");
const validate = require("../../middlewares/validate");
const { blog_Validation } = require("../../validations");
const { blog_Controller } = require("../../controllers");
const router = express.Router()
// Defining routes
router.post(
    "/create-blog",
    validate(blog_Validation.create_blog),
    blog_Controller.create_blog
)
router.put(
    "/update-blog/:blogId",
    validate(blog_Validation.create_blog),
    blog_Controller.update_blog
)
router.delete(
    "/delete-blog/:blogId",
    blog_Controller.delete_blog
)
router.get(
    "/list",
    blog_Controller.get_blog_list
)
// Exporting routes as router
module.exports = router;