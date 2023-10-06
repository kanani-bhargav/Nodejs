const { sport_player_Service } = require("../services");

// Create sport player
const create_sport_player = async(req,res) => {
    try {
        const reqbody = req.body;
        const sport_player_exist = await sport_player_Service.get_sport_player_by_name(reqbody.sport_player_name);
        if(sport_player_exist){
            throw new Error("Sport player on this name already exist -!- ");
        }
        const sport_player = await sport_player_Service.create_sport_player(reqbody);
        if(!sport_player){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport player created successfully ^-^ ",
            data:sport_player
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update sport category
const update_sport_player = async(req,res) => {
    try {
        const sport_player_id = req.params.sport_playerId;
        const reqbody = req.body;
        const sport_player_exist = await sport_player_Service.get_sport_player_by_id(sport_player_id);
        if(!sport_player_exist){
            throw new Error("Sport player does not exist -!- ");
        }
        const sport_player_update = await sport_player_Service.update_sport_player(sport_player_id,reqbody);
        if(!sport_player_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport player updated successfully ^-^ ",
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
const delete_sport_player = async(req,res) => {
    try {
        const sport_player_id = req.params.sport_playerId;
        const sport_player_exist = await sport_player_Service.get_sport_player_by_id(sport_player_id);
        if(!sport_player_exist){
            throw new Error("Sport player does not exist -!- ");
        }
        const sport_player_delete = await sport_player_Service.delete_sport_player(sport_player_id);
        if(!sport_player_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport player deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Sport category list
const get_sport_player_list = async(req,res) => {
    try {
        const sport_player_list = await sport_player_Service.get_sport_player_list();
        if(!sport_player_list){
          throw new Error("Sport player list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get sport player list dispatch successfully ^-^ ",
          data: sport_player_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_sport_player,
    get_sport_player_list,
    update_sport_player,
    delete_sport_player
}