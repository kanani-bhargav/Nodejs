const express = require("express");
const validate = require("../../middlewares/validate");
const { tag_Validation } = require("../../validations");
const { tag_Controller } = require("../../controllers");
const router = express.Router()
// Create tag
router.post(
    "/create-tag",
    validate(tag_Validation.create_tag),
    tag_Controller.create_tag
)
// Update tag with id
router.put(
    "/update-tag/:tagId",
    validate(tag_Validation.create_tag),
    tag_Controller.update_tag
)
// Delete tag by id
router.delete(
    "/delete-tag/:tagId",
    tag_Controller.delete_tag
)
//  Tag list
router.get(
    "/list",
    tag_Controller.get_tag_list
)

module.exports = router;