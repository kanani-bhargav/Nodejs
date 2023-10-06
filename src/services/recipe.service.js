const { Recipe } = require("../models");

const get_recipe_by_name = async(recipe_name) => {
    return Recipe.findOne({recipe_name})
}

const create_recipe = async(reqbody) => {
    return Recipe.create(reqbody);
}

const get_recipe_list = async() => {
    return Recipe.find();
}

const get_recipe_by_id = async(recipe_id) => {
    return Recipe.findById(recipe_id);
}

const update_recipe = async(recipe_id,reqbody) => {
    return Recipe.findByIdAndUpdate(recipe_id,{$set:reqbody});
}

const delete_recipe = async(recipe_id) => {
    return Recipe.findByIdAndDelete(recipe_id);
}

module.exports = {
    get_recipe_by_name,
    create_recipe,
    get_recipe_list,
    get_recipe_by_id,
    update_recipe,
    delete_recipe
}