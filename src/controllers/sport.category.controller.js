const { sport_category_Service } = require("../services");

// Create sport category
const create_sport_category = async(req,res) => {
    try {
        const reqbody = req.body;
        const sport_category_exist = await sport_category_Service.get_sport_category_by_name(reqbody.sport_category_name);
        if(sport_category_exist){
            throw new Error("Sport category on this name already exist -!- ");
        }
        const sport_category = await sport_category_Service.create_sport_category(reqbody);
        if(!sport_category){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport category created successfully ^-^ ",
            data:sport_category
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update sport category
const update_sport_category = async(req,res) => {
    try {
        const sport_category_id = req.params.sport_categoryId;
        const reqbody = req.body;
        const sport_category_exist = await sport_category_Service.get_sport_category_by_id(sport_category_id);
        if(!sport_category_exist){
            throw new Error("Sport category does not exist -!- ");
        }
        const sport_category_update = await sport_category_Service.update_sport_category(sport_category_id,reqbody);
        if(!sport_category_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport category updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete sport category
const delete_sport_category = async(req,res) => {
    try {
        const sport_category_id = req.params.sport_categoryId;
        const sport_category_exist = await sport_category_Service.get_sport_category_by_id(sport_category_id);
        if(!sport_category_exist){
            throw new Error("Sport category does not exist -!- ");
        }
        const sport_category_delete = await sport_category_Service.delete_sport_category(sport_category_id);
        if(!sport_category_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport category deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Sport category list
const get_sport_category_list = async(req,res) => {
    try {
        const sport_category_list = await sport_category_Service.get_sport_category_list();
        if(!sport_category_list){
          throw new Error("Sport category list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get sport category list dispatch successfully ^-^ ",
          data: sport_category_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_sport_category,
    get_sport_category_list,
    update_sport_category,
    delete_sport_category
}