const express = require("express");
const validate = require("../../middlewares/validate");
const { recipe_Validation } = require("../../validations");
const { recipe_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-recipe",
    validate(recipe_Validation.create_recipe),
    recipe_Controller.create_recipe
)

router.put(
    "/update-recipe/:recipeId",
    validate(recipe_Validation.create_recipe),
    recipe_Controller.update_recipe
)

router.delete(
    "/delete-recipe/:recipeId",
    recipe_Controller.delete_recipe
)

router.get(
    "/list",
    recipe_Controller.get_recipe_list
)



module.exports = router;