const { sport_result_Service } = require("../services");

// Create sport event
const create_sport_result = async(req,res) => {
    try {
        const reqbody = req.body;
        const sport_result_exist = await sport_result_Service.get_sport_result_by_name(reqbody.sport_result_name);
        if(sport_result_exist){
            throw new Error("Sport result by this name already exist -!- ");
        }
        const sport_result = await sport_result_Service.create_sport_result(reqbody);
        if(!sport_result){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport result created successfully ^-^ ",
            data:sport_result
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update sport event
const update_sport_result = async(req,res) => {
    try {
        const sport_result_id = req.params.sport_resultId;
        const reqbody = req.body;
        const sport_result_exist = await sport_result_Service.get_sport_result_by_id(sport_result_id);
        if(!sport_result_exist){
            throw new Error("Sport result does not exist -!- ");
        }
        const sport_result_update = await sport_result_Service.update_sport_result(sport_result_id,reqbody);
        if(!sport_result_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport result updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete sport event
const delete_sport_result = async(req,res) => {
    try {
        const sport_result_id = req.params.sport_resultId;
        const sport_result_exist = await sport_result_Service.get_sport_result_by_id(sport_result_id);
        if(!sport_result_exist){
            throw new Error("Sport result does not exist -!- ");
        }
        const sport_result_delete = await sport_result_Service.delete_sport_result(sport_result_id);
        if(!sport_result_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport result deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Sport event list
const get_sport_result_list = async(req,res) => {
    try {
        const sport_result_list = await sport_result_Service.get_sport_result_list();
        if(!sport_result_list){
          throw new Error("Sport result list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get sport result list dispatch successfully ^-^ ",
          data: sport_result_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_sport_result,
    get_sport_result_list,
    update_sport_result,
    delete_sport_result
}