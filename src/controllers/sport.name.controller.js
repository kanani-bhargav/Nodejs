const { sport_name_Service } = require("../services");

// Create sport
const create_sport = async(req,res) => {
    try {
        const reqbody = req.body;
        const sport_name_exist = await sport_name_Service.get_sport_by_name(reqbody.sport_name);
        if(sport_name_exist){
            throw new Error("Sport on this name already exist -!- ");
        }
        const sport_name = await sport_name_Service.create_sport_name(reqbody);
        if(!sport_name){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport created successfully ^-^ ",
            data:sport_name
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update sport
const update_sport = async(req,res) => {
    try {
        const sport_name_id = req.params.sport_nameId;
        const reqbody = req.body;
        const sport_name_exist = await sport_name_Service.get_sport_by_id(sport_name_id);
        if(!sport_name_exist){
            throw new Error("Sport by this name does not exist -!- ");
        }
        const sport_name_update = await sport_name_Service.update_sport(sport_name_id,reqbody);
        if(!sport_name_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete sport
const delete_sport = async(req,res) => {
    try {
        const sport_name_id = req.params.sport_nameId;
        const sport_name_exist = await sport_name_Service.get_sport_by_id(sport_name_id);
        if(!sport_name_exist){
            throw new Error("Sport by this name does not exist -!- ");
        }
        const sport_name_delete = await sport_name_Service.delete_sport(sport_name_id);
        if(!sport_name_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Sport list
const get_sport_list = async(req,res) => {
    try {
        const sport_name_list = await sport_name_Service.get_sport_list();
        if(!sport_name_list){
          throw new Error("Sport list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get sport list dispatch successfully ^-^ ",
          data: sport_name_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_sport,
    get_sport_list,
    update_sport,
    delete_sport
}