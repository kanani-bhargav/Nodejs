const { sport_founder_Service } = require("../services");

// Create sport founder
const create_sport_founder = async(req,res) => {
    try {
        const reqbody = req.body;
        const sport_founder_exist = await sport_founder_Service.get_sport_founder_by_name(reqbody.sport_founder_name);
        if(sport_founder_exist){
            throw new Error("Sport founder by this name already exist -!- ");
        }
        const sport_founder = await sport_founder_Service.create_sport_founder(reqbody);
        if(!sport_founder){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport founder created successfully ^-^ ",
            data:sport_founder
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update sport founder
const update_sport_founder = async(req,res) => {
    try {
        const sport_founder_id = req.params.sport_founderId;
        const reqbody = req.body;
        const sport_founder_exist = await sport_founder_Service.get_sport_founder_by_id(sport_founder_id);
        if(!sport_founder_exist){
            throw new Error("Sport founder does not exist -!- ");
        }
        const sport_founder_update = await sport_founder_Service.update_sport_founder(sport_founder_id,reqbody);
        if(!sport_founder_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport founder updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete sport founder
const delete_sport_founder = async(req,res) => {
    try {
        const sport_founder_id = req.params.sport_founderId;
        const sport_founder_exist = await sport_founder_Service.get_sport_founder_by_id(sport_founder_id);
        if(!sport_founder_exist){
            throw new Error("Sport founder does not exist -!- ");
        }
        const sport_founder_delete = await sport_founder_Service.delete_sport_founder(sport_founder_id);
        if(!sport_founder_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport founder deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Sport founder list
const get_sport_founder_list = async(req,res) => {
    try {
        const sport_founder_list = await sport_founder_Service.get_sport_founder_list();
        if(!sport_founder_list){
          throw new Error("Sport founder list does not exist -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get sport founder list dispatch successfully ^-^ ",
          data: sport_founder_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_sport_founder,
    get_sport_founder_list,
    update_sport_founder,
    delete_sport_founder
}