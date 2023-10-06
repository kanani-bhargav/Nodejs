const { recipe_Service } = require("../services");

const create_recipe = async(req,res) => {
    try {
        const reqbody = req.body;
        const recipe_exist = await recipe_Service.get_recipe_by_name(reqbody.recipe_name);
        if(recipe_exist){
            throw new Error("Recipe on this name already exist -!- ");
        }
        const recipe = await recipe_Service.create_recipe(reqbody);
        if(!recipe){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Recipe created successfully ^-^ ",
            data:recipe
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_recipe = async(req,res) => {
    try {
        const recipe_id = req.params.recipeId;
        const reqbody = req.body;
        const recipe_exist = await recipe_Service.get_recipe_by_id(recipe_id);
        if(!recipe_exist){
            throw new Error("Recipe does not exist -!- ");
        }
        const recipe_update = await recipe_Service.update_recipe(recipe_id,reqbody);
        if(!recipe_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Recipe updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_recipe = async(req,res) => {
    try {
        const recipe_id = req.params.recipeId;
        const recipe_exist = await recipe_Service.get_recipe_by_id(recipe_id);
        if(!recipe_exist){
            throw new Error("Recipe does not exist -!- ");
        }
        const recipe_delete = await recipe_Service.delete_recipe(recipe_id);
        if(!recipe_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Recipe deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_recipe_list = async(req,res) => {
    try {
        const recipe_list = await recipe_Service.get_recipe_list();
        if(!recipe_list){
          throw new Error("Recipe list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get recipe list dispatch successfully ^-^ ",
          data: recipe_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_recipe,
    get_recipe_list,
    update_recipe,
    delete_recipe
}