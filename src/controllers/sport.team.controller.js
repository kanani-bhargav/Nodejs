const { sport_team_Service } = require("../services");

// Create sport team
const create_sport_team = async(req,res) => {
    try {
        const reqbody = req.body;
        const sport_team_exist = await sport_team_Service.get_sport_team_by_name(reqbody.sport_team_name);
        if(sport_team_exist){
            throw new Error("Sport team on this name already exist -!- ");
        }
        const sport_team = await sport_team_Service.create_sport_team(reqbody);
        if(!sport_team){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport team created successfully ^-^ ",
            data:sport_team
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update sport team
const update_sport_team = async(req,res) => {
    try {
        const sport_team_id = req.params.sport_teamId;
        const reqbody = req.body;
        const sport_team_exist = await sport_team_Service.get_sport_team_by_id(sport_team_id);
        if(!sport_team_exist){
            throw new Error("Sport team does not exist -!- ");
        }
        const sport_team_update = await sport_team_Service.update_sport_team(sport_team_id,reqbody);
        if(!sport_team_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport team updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete sport team
const delete_sport_team = async(req,res) => {
    try {
        const sport_team_id = req.params.sport_teamId;
        const sport_team_exist = await sport_team_Service.get_sport_team_by_id(sport_team_id);
        if(!sport_team_exist){
            throw new Error("Sport team does not exist -!- ");
        }
        const sport_team_delete = await sport_team_Service.delete_sport_team(sport_team_id);
        if(!sport_team_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport team deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Sport team list
const get_sport_team_list = async(req,res) => {
    try {
        const sport_team_list = await sport_team_Service.get_sport_team_list();
        if(!sport_team_list){
          throw new Error("Sport team list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get sport team list dispatch successfully ^-^ ",
          data: sport_team_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_sport_team,
    get_sport_team_list,
    update_sport_team,
    delete_sport_team
}