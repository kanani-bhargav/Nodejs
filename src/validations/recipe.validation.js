const Joi = require("joi")

const create_recipe = {
    body: Joi.object().keys({
        recipe_name: Joi.string().required().trim(),
        ingredients: Joi.string().required().trim(),
        instructions: Joi.string().required().trim(),
        cooking_time: Joi.string().required().trim(),
    })
}

module.exports = {
    create_recipe
}